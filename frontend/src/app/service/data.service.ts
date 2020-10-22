import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Todo } from '../todo-list/todo-list.component';

export class HelloBean  {
  constructor(public message : string) {}
}




@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private httpClient : HttpClient) { }

  executeHelloWorldBean() {
    return this.httpClient.get<HelloBean>('http://localhost:8080/hello-bean');
  }

  executeHelloWorldBeanWithParamater(name) {
    return this.httpClient.get<HelloBean>(`http://localhost:8080/hello-bean-param/${name}`);
    
  }

  getListToDoByUserService(name) {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${name}/todo`);
    
  }
}
