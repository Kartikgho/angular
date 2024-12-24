import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { TaskService } from '../task.service';

@Component({
  selector: 'app-task-details',
  templateUrl: './task-details.component.html',
  styleUrls: ['./task-details.component.css']
})
export class TaskDetailsComponent implements OnInit {
  task: any = null;

  constructor(
    private route: ActivatedRoute,
    private taskService: TaskService
  ) {}

  ngOnInit(): void {
    const taskId = +this.route.snapshot.paramMap.get('id');
    this.task = this.taskService.getTasks().subscribe(tasks => {
      this.task = tasks.find(t => t.id === taskId);
    });
  }
}
