import { Component, OnInit, Output } from '@angular/core';
import { TaskService } from '../../services/task.service';
import {Task} from '../../Task';

@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
  @Output() color! : string;

  tasks! : Task[];

  constructor(private taskService: TaskService) { }

  ngOnInit(): void {
    this.taskService.getTasks().subscribe((tasks) => (this.tasks = tasks));
    //wie ein Promise
  }

  deleteItemClick(task : Task) {
    this.taskService.deleteTask(task).subscribe(() => (this.tasks = this.tasks.filter(t => t.id !== task.id)));
  }

  reverseReminder(task: Task) {
    task.reminder = !task.reminder;
    this.taskService.updateReminder(task).subscribe();
  }

  addTask(task : Task) {
    this.taskService.postTask(task).subscribe((task) => (this.tasks.push(task)))
  }

}
