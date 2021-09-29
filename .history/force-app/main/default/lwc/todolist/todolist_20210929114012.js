import { LightningElement, track } from 'lwc';

export default class Todolist extends LightningElement {
    lastTodoId=2;
    @track 
    todos=[
     {id:1,Description:'hello', Priority:'checked'},
     {id:2,Description:'hi', Priority:'Unchecked'}

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
               id:this.lastTodiId,
               Description:this.Description,
               Priority:this.Priority
            }
        ]
    }

}