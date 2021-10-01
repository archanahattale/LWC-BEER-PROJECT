import { LightningElement } from 'lwc';

export default class ParentComponent extends LightningElement {
    message='I am parent component';
    handleChange(){
        const event = new ShowToastEvent({
            title: 'Toast message',
            message: 'Toast Message',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(event);
    }
}