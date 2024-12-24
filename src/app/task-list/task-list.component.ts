import { Component, OnInit } from '@angular/core';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-list',
  templateUrl: './task-list.component.html',
  styleUrls: ['./task-list.component.css']
})
export class TaskListComponent implements OnInit {
  tasks = [];
  newTask = { title: '', description: '' };
  editingTask: any = null;

  constructor(private taskService: TaskService) {}

  ngOnInit(): void {
    this.taskService.getTasks().subscribe(tasks => {
      this.tasks = tasks;
    });
  }

  addTask() {
    if (this.newTask.title && this.newTask.description) {
      const task = {
        id: new Date().getTime(),
        title: this.newTask.title,
        description: this.newTask.description
      };
      this.taskService.addTask(task);
      this.newTask = { title: '', description: '' };
    }
  }

  deleteTask(id: number) {
    this.taskService.deleteTask(id);
  }

  editTask(task: any) {
    this.editingTask = { ...task };
  }

  saveEditedTask() {
    if (this.editingTask) {
      this.taskService.editTask(this.editingTask);
      this.editingTask = null;
    }
  }

  cancelEdit() {
    this.editingTask = null;
  }
}
