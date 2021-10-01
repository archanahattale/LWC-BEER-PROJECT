import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ParentComponent extends LightningElement {
    message='I am parent component';
    handleChange(){
        title: 'Toast Error',
        message: 'Some unexpected error',
        variant: 'error',
        mode: 'dismissable'
    });
    this.dispatchEvent(evt);
        alert('hi');
    }
}