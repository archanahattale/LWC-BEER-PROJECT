public with sharing class BeerController {
    public BeerController() {

    }

    public static String generateCardId(){
        String CharList = 'abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789_';
        Integer position;
        Integer LengthRequired = 30;
        String Res = '';
        for(Integer i = 0; i <= LengthRequired; i++) {
            position = Integer.valueof(String.valueof(Math.roundToLong(CharList.length()*Math.random()))) -1;
            Res += CharList.substring(position,position+1);
        }
        return Res;
    }

  

    @AuraEnabled(cacheable=true)
    public static List<sObject> searchBeer(String searchParam){
        String likeParam = '%' +searchParam+'%';
        String Query = '';
        /*
            Select Id, Name From beer__c Where Name Like '%aa%'
        */
        if(searchParam != null){
           Query  = 'Select Id, Name, Alcohol__c,brewery_id__c, brewery_Name__c, Id__c, Price__c,Image__c,Remaining_Quantity__c, Tags__c, Total_Quantity__c From Beer__c Where Name Like :likeParam LIMIT 50 ';
        }else{
           Query  = 'Select Id, Name, Alcohol__c,brewery_id__c, brewery_Name__c, Id__c, Price__c,Image__c,Remaining_Quantity__c, Tags__c, Total_Quantity__c From Beer__c LIMIT 50 '; 
        }
        
        List<SObject> sObjectList = Database.query(Query);
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