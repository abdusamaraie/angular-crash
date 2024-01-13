import { Component, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
import { TaskService } from '../../services/task.service';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrl: './tasks.component.css',
})
export class TasksComponent implements OnInit {
  tasks: Task[] = [];
  constructor(private taskservice: TaskService) {
    // this.taskservice.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }

  ngOnInit(): void {
    this.taskservice.getTasks().subscribe((tasks) => (this.tasks = tasks));
  }
  deleteTask(task: Task) {
    this.taskservice
      .deleteTaskByID(task)
      .subscribe(
        () => (this.tasks = this.tasks.filter((t) => t.id !== task.id))
      );
  }

  toggleReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskservice.updateTaskReminder(task).subscribe();
  }

  addTask(task: Task) {
    this.taskservice.addTask(task).subscribe((task) => this.tasks.push(task));
  }
}
