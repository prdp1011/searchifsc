import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginRoutingModule } from './login-routing.module';
import { LoginComponent } from './login.component';
import { AllModule } from '../branch-list/all.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [
    CommonModule,
    AllModule,
    LoginRoutingModule
  ]
})
export class LoginModule { }
