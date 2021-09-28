import { LightningElement, track } from 'lwc';

export default class Samplecomponent extends LightningElement {
    @track greeting;
    greetser(event){
        let txtInput=this.querySelector(".txtInput");
        this.greeting=txtInput.value;
       }
}