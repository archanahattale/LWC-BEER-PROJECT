public with sharing class LwcComponent {
    public LwcComponent() {
}
   @AuraEnabled(cacheable=true)
    public static List<Contact> getContactList(){
       return [SELECT ID, Name,Email FROM Contact LIMIT 20];
    }
}
