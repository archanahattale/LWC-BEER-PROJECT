public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(cachable=true)
    public static string getlstContacts(){
      return [SELECT ID,FirstName,];
    }
}
