import { LightningElement, track } from 'lwc';

export default class Todolist extends LightningElement {
    lastTodoId=2;
    @track 
    todos=[
     {Id:1,Description:'hello',Priority:checked},
     {Id:2,Description:'hi',Priority:checked}

    ];
    @track Description
    @track Priority

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