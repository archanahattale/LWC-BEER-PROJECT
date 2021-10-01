import { LightningElement } from 'lwc';

export default class LwcComponent extends LightningElement {
    greeting="Hello";
    inputText="";
    handleClick(event){
        this.inputText=event.target.value;
        window.console.log('event.target',+event.target.value)
    }
}