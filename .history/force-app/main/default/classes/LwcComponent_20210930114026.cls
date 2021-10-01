public with sharing class LwcComponent {
    public LwcComponent() {

    }
    @AuraEnabled
    public static string methodName(){
        try{
            
        } catch (Exception e) {
            throw new AuraHandledException(e.getMessage());
        }
    }
}
