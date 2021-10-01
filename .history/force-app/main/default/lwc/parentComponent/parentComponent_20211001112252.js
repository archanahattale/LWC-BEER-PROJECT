import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';
export default class ParentComponent extends LightningElement {
    message='I am parent component';
   
      handleClick(){
          this.message='alert';
          this.template.queryselector('child')
      }
    }
