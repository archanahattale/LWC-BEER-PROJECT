<rule ref="category/apex/errorprone.xml/EmptyStatementBlock />
public with sharing class LwcComponent {
    public LwcComponent() {
}
    @AuraEnabled
    public static List<Contact> getContactList(){
       return [SELECT ID, Name,Email FROM Contact LIMIT 20];
    }
}