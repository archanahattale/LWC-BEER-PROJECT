public with sharing class BeerController {
    /*public BeerController() {

    }8?

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