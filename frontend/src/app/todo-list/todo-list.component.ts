import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { TodoDataService } from '../service/todo-data.service';

export class Todo {

constructor(
  public id: number,
  public description: string,
  public date: Date,
  public done: boolean,
){}


}

@Component({
  selector: 'app-todo-list',
  templateUrl: './todo-list.component.html',
  styleUrls: ['./todo-list.component.css']
})
export class TodoListComponent implements OnInit {

  public todos : any = [];
  public name: string;
  public todoList : any = [];
  public deleteNotification : string;
  public isDeleted: boolean;

  constructor(private todoService: TodoDataService, 
    private route : Router) { }

  
  ngOnInit() {
    this.todoList = [];
    this.todos = [];
    this.deleteNotification = null;
    this.isDeleted = false;
    //this.getListOfTodosByUser()

      this.todoService.getListToDoByUserService(this.name).subscribe(
        response => {
          //console.log(response);
          this.todoList = response;
        }
      );
  }

  getListOfTodosByUser() {
    this.todoService.getListToDoByUserService(this.name).subscribe(
      response => this.handleServerResponseForTodos(response),
      error => this.handleServerErrroForTodos(error)
    );
  }

  handleServerResponseForTodos(response) {
    this.todoList = response;
    //console.log(this.todoList);
  }
  

  handleServerErrroForTodos(error) {
    console.log(error);
  }

  deleteTodoFromList(id){
    this.todoService.deleteTodoByUserService('Houssem', id).subscribe(
      response => {
        this.deleteNotification = 'Todo deleted Successfully ';
        this.isDeleted = true;
        this.getListOfTodosByUser();
      },
      error => this.errorDelete()
    );
  }

  errorDelete(){
    this.deleteNotification = 'An error Occured';
  }

  updateTodo(id){
    console.log(`todo updated ${id}`);
    this.route.navigate(['list',id]);

  }
}
