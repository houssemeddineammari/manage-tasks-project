import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ActivatedRoute } from '@angular/router';
import { DataService } from '../service/data.service';


@Component({
  selector: 'app-welcome',
  templateUrl: './welcome.component.html',
  styleUrls: ['./welcome.component.css']
})
export class WelcomeComponent implements OnInit {

  public name: string;
  public dataFromServer: string;
  public todoList : any = [];
  public serverError: string;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private welcomeService: DataService) { }

  ngOnInit() {
    this.name = this.route.snapshot.params['name'];
    this.dataFromServer = null;
    this.serverError = null;
    this.todoList = [];
  }

  onGoToMyList() {
    this.router.navigate(['list']);
  }

  WelcomeFromBackend() {
    this.welcomeService.executeHelloWorldBean().subscribe(
      response => this.handleServerResponse(response),
      error => this.handleServerErrro(error)
    );
  }

  WelcomeFromBackendWithParam() {
    this.welcomeService.executeHelloWorldBeanWithParamater(this.name).subscribe(
      response => this.handleServerResponse(response),
      error => this.handleServerErrro(error)
    );
  }

  handleServerResponse(response) {
    this.dataFromServer = response.message;
    console.log(this.dataFromServer);
  }

  handleServerErrro(error) {
    this.serverError = error.error.message;
  }

  getListOfTodosByUser() {
    this.welcomeService.getListToDoByUserService(this.name).subscribe(
      response => this.handleServerResponseForTodos(response),
      error => this.handleServerErrroForTodos(error)
    );
  }

  handleServerResponseForTodos(response) {
    this.todoList = response;
    console.log(this.todoList);
  }

  handleServerErrroForTodos(error) {
    console.log(error);
  }


}
