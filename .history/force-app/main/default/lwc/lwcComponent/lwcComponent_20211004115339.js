import { LightningElement, wire } from 'lwc';
import getContactList from '@salesforce/apex/LwcComponent.getContactList';
export default class LwcComponent extends LightningElement {
    greeting="Hello";
    inputText="";

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
}