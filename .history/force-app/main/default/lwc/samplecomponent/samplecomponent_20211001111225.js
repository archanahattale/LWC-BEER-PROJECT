// import { LightningElement, track } from 'lwc';

// export default class Samplecomponent extends LightningElement {
//     @track greeting="archana";
//     greetUser(event){
//         let txtInput=this.querySelector(",txtInput");
//         this.greeting=txtInput.value;
//        }
// }
import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ToastNotificationExampleLWC extends LightningElement {
    message='some unexpected error';
    showErrorToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Error',
            message: 'Some unexpected error',
            variant: 'error',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showSuccessToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Success',
            message: 'Opearion sucessful',
            variant: 'success',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showWarningToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Warning',
            message: 'Some problem',
            variant: 'warning',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    showInfoToast() {
        const evt = new ShowToastEvent({
            title: 'Toast Info',
            message: 'Operation will run in background',
            variant: 'info',
            mode: 'dismissable'
        });
        this.dispatchEvent(evt);
    }
    
}