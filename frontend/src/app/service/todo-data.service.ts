import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Todo } from '../todo-list/todo-list.component';

@Injectable({
  providedIn: 'root'
})
export class TodoDataService {

  constructor(private httpClient : HttpClient) { }

  getListToDoByUserService(name) {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${name}/todo`);
    
  }

  deleteTodoByUserService(name, id){
    return this.httpClient.delete<Todo>(`http://localhost:8080/users/${name}/todo/${id}`);
  }

  getTodoById(name, id) {
    return this.httpClient.get<Todo>(`http://localhost:8080/users/${name}/todo/${id}`);
  }
}
