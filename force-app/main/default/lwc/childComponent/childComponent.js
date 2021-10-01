import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api message

    @api
    childcomp(name){
        this.message='hello';
    }
}