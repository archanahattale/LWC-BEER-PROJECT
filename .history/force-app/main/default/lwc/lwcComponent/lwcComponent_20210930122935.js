import { LightningElement, wire } from 'lwc';

export default class LwcComponent extends LightningElement {
    greeting="Hello";
    inputText="";

   @wirewire
    handleClick(event){
        this.inputText=event.target.value;
        window.console.log('event.target',+event.target)
    }

    handleSubmit(event){
        alert('button clicked');
    }
}