import { TaskService } from './../../services/task.service';

import { observable,of } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Task } from '../../Task';


@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {
tasks:Task[]=[];


  constructor(private taskservice:TaskService) { }

  ngOnInit(): void {
   this.taskservice.getTasks().subscribe((tasks)=>(this.tasks=tasks));
  }

}
