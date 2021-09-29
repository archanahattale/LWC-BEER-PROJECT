import { LightningElement, track } from 'lwc';

export default class Todolist extends LightningElement {
    lastTodoId=2;
    @track 
    todos=[
     {Id:1,Description:'hello'},
     {Id:2,Description:'hi', Priority:'Unchecked'}

    ];
    @track Description
    @track Priority=false

    handlechangeDescription(event){
        this.Description=event.target.value;
    }

    handlechangePriority(event){
        this.Priority=event.Priority.checked;
    }

    handleSave(event){
        this.lastTodoId=this.lastTodoId+1;
        this.todos=[
            ...this.todos,
            {
               id:this.lastTodoId,
               Description:this.Description,
               Priority:this.Priority
            }
        ]
    }

}