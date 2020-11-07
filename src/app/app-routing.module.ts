import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AdminComponent } from './pages/admin/admin.component';
import { FindComponent } from './pages/find/find.component';
import { HomeComponent } from './pages/home/home.component';
import { LeaseComponent } from './pages/lease/lease.component';
import { LoginRegisterComponent } from './pages/login-register/login-register.component';
import { RegisterComponent } from './pages/register/register.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'find', component: FindComponent },
  { path: 'lease', component: LeaseComponent },
  { path: 'login', component: LoginRegisterComponent },
  { path: 'register', component: RegisterComponent },
  { path: 'admin', component: AdminComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
