import { Observable, of } from 'rxjs';
import { TASKS } from './../components/mock-tasks';
import { Injectable } from '@angular/core';
import { Task } from '../Task';

@Injectable({
  providedIn: 'root'
})
export class TaskService {

  constructor() { }
  getTasks():Observable<Task[]>{
    const tasks = of(TASKS);
  return tasks;
}

}
