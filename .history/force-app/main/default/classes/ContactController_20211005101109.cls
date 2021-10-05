public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(cachable=true)
    public static string getlst(){
      return List<Contact> listName = new List<Contact>();
    }
}
