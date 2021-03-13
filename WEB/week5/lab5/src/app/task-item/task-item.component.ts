import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Task} from '../task';

@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrls: ['./task-item.component.css']
})
export class TaskItemComponent implements OnInit {
  @Input() task!: Task;
  @Output() remove = new EventEmitter();
  @Output() done = new EventEmitter();
  constructor() { }

  ngOnInit(): void {
  }
  removeTask(index: number): void{
    this.remove.emit(index);
  }
  isDoneChanged(): void{
    this.done.emit(this.task)
  }
}
