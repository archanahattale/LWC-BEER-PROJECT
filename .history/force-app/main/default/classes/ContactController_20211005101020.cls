public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(ca)
    public static string methodName(){
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
