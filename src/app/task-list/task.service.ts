import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

interface Task {
  id: number;
  title: string;
  description: string;
}

@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private tasks: Task[] = [];
  private taskSubject = new BehaviorSubject<Task[]>(this.tasks);

  constructor() {}

  getTasks() {
    return this.taskSubject.asObservable();
  }

  addTask(task: Task) {
    this.tasks.push(task);
    this.taskSubject.next(this.tasks);
  }

  editTask(updatedTask: Task) {
    const index = this.tasks.findIndex(task => task.id === updatedTask.id);
    if (index !== -1) {
      this.tasks[index] = updatedTask;
      this.taskSubject.next(this.tasks);
    }
  }

  deleteTask(id: number) {
    this.tasks = this.tasks.filter(task => task.id !== id);
    this.taskSubject.next(this.tasks);
  }
}
