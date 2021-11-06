import { Component } from '@angular/core';
import { HttpClient } from "@angular/common/http";
import { Task } from "./entity/Task";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'DemoAndRestful';

  task!: Task
  //task: Task | undefined;

  constructor(private http: HttpClient) {
    this.http.get<Task>('http://localhost:8080/task').subscribe(result => {
      this.task = result;
      console.log(this.task);
    });
  }
}
