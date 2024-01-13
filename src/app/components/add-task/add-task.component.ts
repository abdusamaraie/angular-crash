import { Component, Output, EventEmitter, OnInit } from '@angular/core';
import { Task } from '../../interfaces/Task';
@Component({
  selector: 'app-add-task',
  templateUrl: './add-task.component.html',
  styleUrl: './add-task.component.css',
})
export class AddTaskComponent implements OnInit {
  @Output() onAddTask: EventEmitter<Task> = new EventEmitter();
  text: string = '';
  day: string = '';
  reminder: boolean = false;

  ngOnInit(): void {}

  constructor() {}
  onSubmit() {
    if (!this.text) {
      alert('Please add a task');
      return;
    }
    const newTask = {
      text: this.text,
      day: this.day,
      reminder: this.reminder,
    };

    // emit the event to parent task component
    this.onAddTask.emit(newTask);

    // clear the form
    this.text = '';
    this.day = '';
    this.reminder = false;
  }
}
