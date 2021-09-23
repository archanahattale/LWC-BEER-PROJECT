public with sharing class BeerController {
  /* public BeerController() {

   }*/

   public static String generateCardId(){
       String charList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
       Integer position;
       Integer lengthRequired = 30;
       String res = '';
       for(Integer i = 0; i <= lengthRequired; i++) {
           position = Integer.valueof(String.valueof(Math.roundToLong(charList.length()*Math.random()))) -1;
           res += charList.substring(position,position+1);
       }
       return res;
   }

   public static String getCouponInformation(String name){
       Coupon__c couponRec = [Select Id, Name, 
                               Price__c 
                               FROM Coupon__c 
                               Where Expired__c = false
                               AND Name =: name];
       return couponRec.Id;
   }

   @AuraEnabled
   public static string createCartItems(String cartId, String beerId, Decimal amount){
       Cart_Item__c item = new Cart_Item__c();
       Map<Id, Cart_Item__c> cartItemsMap = getCartItems(CartId);
       if ( cartItemsMap.containsKey(beerId) ) {
           item = cartItemsMap.get(beerId);
           item.Item_amount__c = item.Item_amount__c + amountAmount;
           item.Item_Quantity__c = item.Item_Quantity__c + 1;
           update item;
       } else {
           item.Beer__c = beerId;
           item.Cart__c = cartId;
           item.Item_Quantity__c = 1;
           item.Item_amount__c = amount;
           insert item;
       }
       
       return item.Id;
   }

   public Static Map<Id, Cart_Item__c> getCartItems(String cartId){
       /* beerId, Cart_Iems*/
       Map<Id, Cart_Item__c> cartItemsMap = new Map<Id, Cart_Item__c>();
       for ( Cart_Item__c cart : [Select Id, Name, Beer__c, Cart__c, 
                               Item_Quantity__c, Item_Amount__c
                               FROM Cart_Item__c
                               Where Cart__c =: cartId]) {
           cartItemsMap.put(cart.Beer__c, cart);
       }
       return cartItemsMap;
   }

   @AuraEnabled(cacheable=false)
   public static string getCartId(){
       List<Cart__c> cartInfo = [ Select Id, Name 
                               FROM Cart__c 
                               Where User__c =: UserInfo.getUserId()
                               AND Cart_Status__c = 'Open'
                               AND Is_Active__c = true];
       if (cartInfo != null && cartInfo.size() > 0) {
           List<Cart_Item__c> cartItems = new list<Cart_Item__c>();
           cartItems = [Select Id, Name, Beer__c, Cart__c, Item_Quantity__c, Item_Amount__c
                               FROM Cart_Item__c
                               Where Cart__c =: cartInfo.get(0).Id];
           
           Decimal itemQnty = 0;
           for (Cart_Item__c item : cartItems) {
               itemQnty = itemQnty + item.Item_Quantity__c;
           }
           CartWrapper wrapper = new CartWrapper();
           wrapper.CartId = cartInfo.get(0).Id;
           wrapper.items = cartItems;
           wrapper.Count = itemQnty;
           return JSON.serialize(wrapper);
       } else { 
           Cart__c defaultCart = new Cart__c();
           String couponId = getCouponInformation('Default');
           defaultCart.Cart_Id__c = String.valueOf(Math.random());
           defaultCart.Cart_Status__c = 'Open';
           defaultCart.Is_Active__c = true;
           defaultCart.Coupon__c = couponId;
           defaultCart.User__c = UserInfo.getUserId();
           insert defaultCart;
           CartWrapper wrapper = new CartWrapper();
           wrapper.CartId = defaultCart.Id;
           wrapper.items = null;
           wrapper.Count = 0;
           return JSON.serialize(wrapper);
       }                        
   }

   @AuraEnabled(cacheable=true)
   public static List<sObject> searchBeer(String searchParam){
       String likeParam = '%' +searchParam+'%';
       String query = '';
       /*
           Select Id, Name From beer__c Where Name Like '%aa%'
       */
       if(searchParam != null){
         query  = 'Select Id, Name, Alcohol__c,brewery_id__c, brewery_Name__c, Id__c, Price__c,Image__c,Remaining_Quantity__c, Tags__c, Total_Quantity__c From Beer__c Where Name Like :likeParam LIMIT 50 ';
       }else{
         query  = 'Select Id, Name, Alcohol__c,brewery_id__c, brewery_Name__c, Id__c, Price__c,Image__c,Remaining_Quantity__c, Tags__c, Total_Quantity__c From Beer__c LIMIT 50 '; 
       }
       
       List<SObject> sObjectList = Database.query(query);
       return sObjectList;
   }

   public class CartWrapper {
       @AuraEnabled
       public String CartId                { get; set; }
       @AuraEnabled
       public Decimal Count                { get; set; }
       @AuraEnabled
       public List<Cart_Item__c> items     { get; set; }
   }
}