public with sharing class BeerController {
    public BeerController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Object> searchBeer(String searchParam){
       String likeParam ='%' +searchParam+'%';
       String Query ='';
       if(searchParam !=null){
        Query='Select Id,Name,Alcohol__c,brewery_id__c,brewery_Name__c,Id__c,Price__c,Image__c,Remaining_Quantity__c,Tags__c,Total_Quantity__c from Beer__c Where Name Like :likeParam LIMIT 50';
       }else{
        Query='Select Id,Name,Alcohol__c,brewery_id__c,brewery_Name__c,Id__c,Price__c,Image__c,Remaining_Quantity__c,Tags__c,Total_Quantity__c from Beer__c LIMIT 50';

       }
       List<Object> sObjectList= new Database.query(Query);
       return sObjectList;
    }
    }

