import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrl: './header.component.css',
})
export class HeaderComponent {
  title = 'Task Tracker';

  constructor() {}
  toggleAddTask() {
    console.log('toggle');
  }
}
