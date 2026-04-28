import { CommonModule, NgFor } from '@angular/common';
import { Component, signal } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  imports: [RouterOutlet,FormsModule,CommonModule],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected readonly title = signal('todo-app');
  task: string = '';
  taskList: {text: string; completed: boolean}[] = [];
  addTask() {
    if (this.task.trim() !== '') {
      this.taskList.push({text: this.task, completed: false});
      this.task = '';
    }
}
removeTask(index: number) {
  this.taskList.splice(index, 1); 
}

toggleTaskCompletion(index: number) {
  this.taskList[index].completed = !this.taskList[index].completed;

}
}
