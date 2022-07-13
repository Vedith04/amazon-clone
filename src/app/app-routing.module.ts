import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LoginComponent } from './pages/login/login.component';
import { UsercartComponent } from './pages/usercart/usercart.component';

const routes: Routes = [
  {path:'',component: HomeComponent},
  {path:'cart',component: UsercartComponent},
  {path:'login',component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
