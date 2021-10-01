import { LightningElement } from 'lwc';

export default class LwcComponent extends LightningElement {
    greeting="Hello";
    inputText="";

    @wire(apex-method-name, {})
    apex-function-name ({error, data}) {
        if (error) {
            // TODO: Error handling
        } else if (data) {
            // TODO: Data handling
        }
    }
    handleClick(event){
        this.inputText=event.target.value;
        window.console.log('event.target',+event.target)
    }

    handleSubmit(event){
        alert('button clicked');
    }
}