import { Component } from '@angular/core';

@Component({
  selector: 'app-homework',
  templateUrl: './homework.component.html',
  styleUrls: ['./homework.component.css']
})
export class HomeWorkComponent {
  tasks: string [] = [];

  task: string ;

  addTasks(){
    this.tasks.push (this.task)
  }

  deleteTasks( taskIndex: number){
   this.tasks = this.tasks.filter((t, index) => index !== taskIndex);
  }
}
