public with sharing class ContactController {
    @AuraEnabled
    public static String avi{get;set}
    public ContactController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getlstContacts(){
      return [SELECT ID,FirstName,LastName FROM Contact LIMIT 10];
    }
}
