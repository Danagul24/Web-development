import { Component, OnInit } from '@angular/core';
import {Task} from '../task';
@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  newTasks: Task[];
  doneTasks: Task[];
  currentTask: Task;
  constructor() {
    this.newTasks = [new Task( 'task1'), new Task( 'task2')];
    this.currentTask = new Task();
    this.doneTasks = [];
  }

  ngOnInit(): void {
  }
  addTodo(): void{
    if (this.currentTask.title !== ''){
      this.newTasks.push(this.currentTask);
      this.currentTask = new Task();
    }
  }
  onNewTaskRemove(index: number): void{
    this.newTasks = this.newTasks.filter((x) => x.id !== index);
  }
  onDoneTaskRemove(index: number): void{
    this.doneTasks = this.doneTasks.filter((x) => x.id !== index);
  }
  onIsDoneChanged(task: Task): void{
    if (task.isDone){
      this.onNewTaskRemove(task.id);
      this.doneTasks.push(task);
    }else{
      this.doneTasks = this.doneTasks.filter((x) => x.id !== task.id);
      this.newTasks.push(task);
      this.newTasks.sort((a,b) => a.id > b.id ? 1 : -1);
    }
  }


}
