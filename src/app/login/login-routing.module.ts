import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login.component';
import { AuthCompGuard } from '../auth-comp.guard';


const routes: Routes = [{
  path: '',
  component: LoginComponent,
  canActivate: [AuthCompGuard]
}];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LoginRoutingModule { }
