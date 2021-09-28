import { LightningElement, track } from 'lwc';

export default class Samplecomponent extends LightningElement {
    @track greeting;
    greetuser(event){
        let txtinput=this.querySelector(".txtinput");
        this.greeting=txtinput.value;
       }
}