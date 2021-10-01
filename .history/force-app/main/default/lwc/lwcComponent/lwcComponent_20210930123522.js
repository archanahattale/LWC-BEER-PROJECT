import { LightningElement, wire } from 'lwc';

export default class LwcComponent extends LightningElement {
    greeting="Hello";
    inputText="";

   @wire(getContactList)
   wiredData({erroe,data}
    ){
       if(data)
       {
           this.result=data;
           this.error=undefined;
       }
       else if(error)
       {
           this.error=error;
           this.result=undefined;
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