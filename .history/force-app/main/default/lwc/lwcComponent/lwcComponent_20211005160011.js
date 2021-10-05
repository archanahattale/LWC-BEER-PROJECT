import { LightningElement, track, wire, api} from 'lwc';
import getContactList from '@salesforce/apex/LwcComponent.getContactList';
import getAccounts from '@salesforce/apex/ContactController.getAccounts';
import {ShowToastEvent} from 'lightning/platformShowToastEvent';
export default class LwcComponent extends LightningElement {
    greeting="Hello";
    inputText="";
    @track Accounts; 
    @api Account;
    @track error; 
    @track success; 
   @wire(getContactList)
   wiredData({error,data}) {
       if (data){
           this.result=data;
           this.error=undefined;
           window.console.log('Contact record ', data);
       }
       else if (error) {
           this.error=error;
           window.console.log('error record ', error );

           this.result=undefined;
       }
   }
    handleClick(event) {
        this.inputText=event.target.value;
        window.console.log('event.target',event.target)
    }

    handleSubmit(event){
        alert('button clicked');
    }
    value = 'inProgress';

    get options() {
        return [
            { label: 'New', value: 'new' },
            { label: 'In Progress', value: 'inProgress' },
            { label: 'Finished', value: 'finished' },
        ];
    }

    handleChange(event) {
        this.value = event.detail.value;
    }

 
   
    getallaccounts() {
        getAccounts()
            .then(result => {
                this.Accounts = result;
                this.error = undefined;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: ' Accounts Retrieve successfully',
                        message: 'Accounts Retrieve success, no of records-->' + result.length,
                        variant: 'success',
                    }),
                );
            })
            .catch(error => {
                this.error = error;
                this.dispatchEvent(
                    new ShowToastEvent({
                        title: 'Error while getting Accounts',
                        message: error.message,
                        variant: 'error',
                    }),
                );
                this.accounts = undefined;
            });
    } 
    data = data;
    columns = columns;

    getSelectedName(event) {
        const selectedRows = event.detail.selectedRows;
        // Display that fieldName of the selected rows
        for (let i = 0; i < selectedRows.length; i++){
            alert("You selected: " + selectedRows[i].opportunityName);
        }
    }
}