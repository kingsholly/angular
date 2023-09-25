import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './Components/login/login.component';
import { TextcomponentComponent } from './textcomponent/textcomponent.component';

const routes: Routes = [

  {path: "login", component: LoginComponent},
  {path: "home", component: TextcomponentComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
