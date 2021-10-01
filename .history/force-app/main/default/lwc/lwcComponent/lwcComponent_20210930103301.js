import { LightningElement } from 'lwc';

export default class LwcComponent extends LightningElement {
    greeting="Hello";

    handleClick(event){
        this.inputText=event.target.value;
        window.console.log
    }
}