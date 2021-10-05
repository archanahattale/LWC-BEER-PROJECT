public with sharing class ContactController {
    @AuraEnabled
    public static 
    public ContactController() {

    }
    @AuraEnabled(cacheable=true)
    public static List<Contact> getlstContacts(){
      return [SELECT ID,FirstName,LastName FROM Contact LIMIT 10];
    }
}
