import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { LoginComponent } from './login/login.component';
import { CreateCarComponent } from './create-car/create-car.component';
import { CreateMarkComponent } from './create-mark/create-mark.component';
import { MarkListComponent } from './mark-list/mark-list.component';

const routes: Routes = [
  {path: 'login', component: LoginComponent},
  {path: '', component: LoginComponent},
  {path: 'hello-world', component: HelloWorldComponent},
  {path: 'logout', component: LoginComponent},
  {path: 'create-car', component: CreateCarComponent},
   {path: 'create-mark', component: CreateMarkComponent},
     {path: 'marks', component: MarkListComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})

export class AppRoutingModule { }
