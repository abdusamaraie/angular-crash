import { Component, Input } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { faTimes } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-task-item',
  templateUrl: './task-item.component.html',
  styleUrl: './task-item.component.css',
})
export class TaskItemComponent {
  @Input() task: Task;
  faTimes = faTimes;

  constructor() {
    this.task = {
      id: 0,
      text: '',
      day: '',
      reminder: false,
    };
  }
}
