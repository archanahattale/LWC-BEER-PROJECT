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
        this.dispatchEvent() = new ShowToastEvent({
            title: 'Toast Error',
            message: 'Some unexpected error',
            variant: 'error',
           
        });
        
    }
  
    
}