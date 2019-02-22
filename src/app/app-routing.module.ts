import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CardComponent } from './ontrack/components/card/card.component';
import { RegistrationcompComponent } from './ontrack/components/registrationcomp/registrationcomp.component';
import { HomeComponent } from './ontrack/components/home/home.component';
import { LoginComponent } from './ontrack/components/login/login.component';


const routes: Routes = [
  {
    path: 'login', component: LoginComponent
  },
  {
    path: 'Signup', component: RegistrationcompComponent
  },
  {
    path: '**', component: HomeComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
