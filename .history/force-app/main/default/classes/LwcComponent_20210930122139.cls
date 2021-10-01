<rule ref='category/apex/security.xml/ApexCRUDViolation' />
public with sharing class LwcComponent {
    public LwcComponent() {
}
    @AuraEnabled
    public static List<Contact> getContactList(){
       return [SELECT ID, Name,Email FROM Contact LIMIT 20];
    }
}
