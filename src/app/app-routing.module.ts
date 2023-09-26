import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';
import { TodoComponent } from './Components/todo/todo.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  {path: "login", component: LoginComponent},
  {path: "home", component: TextcomponentComponent},
  {path: "todo", component: TodoComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
