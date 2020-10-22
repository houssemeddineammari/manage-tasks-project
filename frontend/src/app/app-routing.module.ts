import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ErrorComponent } from './error/error.component';
import { LoginComponent } from './login/login.component';
import { LogoutComponent } from './logout/logout.component';
import { RouteGuardService } from './service/route-guard.service';
import { TodoListComponent } from './todo-list/todo-list.component';
import { TodoComponent } from './todo/todo.component';
import { WelcomeComponent } from './welcome/welcome.component';

const routes: Routes = [
  { path : '', component: LoginComponent },
  { path : 'login', component: LoginComponent },
  { path : 'welcome/:name', component: WelcomeComponent, canActivate: [RouteGuardService] },
  { path : 'error', component: ErrorComponent, canActivate: [RouteGuardService] },
  { path : 'list', component: TodoListComponent, canActivate: [RouteGuardService] },
  { path : 'list/:id', component: TodoComponent, canActivate: [RouteGuardService] },
  { path : 'logout', component: LogoutComponent, canActivate: [RouteGuardService] },
  { path : '**', component: ErrorComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
