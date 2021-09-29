import { LightningElement, track } from 'lwc';

export default class Todolist extends LightningElement {
    lastTodiId=2;
    @track 
    todos=[
     {1}
    ];
}