public with sharing class ContactController {
    public ContactController() {

    }
    @AuraEnabled(cachable=true)
    public static string methodName(){
        try {
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
