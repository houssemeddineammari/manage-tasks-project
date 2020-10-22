import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { TodoDataService } from '../service/todo-data.service';
import { Todo } from '../todo-list/todo-list.component';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrls: ['./todo.component.css']
})
export class TodoComponent implements OnInit {

  public id:number;
  public selectedTodo : Todo;

  constructor(private router: Router,
     private route: ActivatedRoute,
     private todoService: TodoDataService) { }

  ngOnInit() {
  this.id = this.route.snapshot.params['id'];
  this.selectedTodo = new Todo(this.id, '', new Date(), false);
  this.getTodoByUserAndId();
  }

  getTodoByUserAndId() {
    this.todoService.getTodoById('houssem', this.id).subscribe(
      response =>{
        this.selectedTodo = response;
        console.log(this.selectedTodo);
      },
      error => error
    );
  }

  saveTodo() {
    
  }

}
