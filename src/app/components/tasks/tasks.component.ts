import { Component } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TASKS } from '../../data/mock-tasks';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent {
  tasks: Task[] = TASKS;
  constructor() {}
}
