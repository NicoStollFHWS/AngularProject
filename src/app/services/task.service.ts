import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
import {Observable} from 'rxjs';
import {Task} from '../Task';

const httpOptions = {
  headers: new HttpHeaders({
    'Content-Type': 'application/json'
  })
}
@Injectable({
  providedIn: 'root'
})
export class TaskService {
  private apiURL = 'http://localhost:5000/tasks';


  constructor(private httpCli : HttpClient) { }

  getTasks() : Observable<Task[]> {
    return this.httpCli.get<Task[]>(this.apiURL);
  }

  deleteTask(task : Task) : Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.httpCli.delete<Task>(url);
  }

  updateReminder(task : Task) : Observable<Task> {
    const url = `${this.apiURL}/${task.id}`;
    return this.httpCli.put<Task>(url, task, httpOptions);

  }

  postTask(task: Task) : Observable<Task> {
    return this.httpCli.post<Task>(this.apiURL, task, httpOptions);
  }
}
