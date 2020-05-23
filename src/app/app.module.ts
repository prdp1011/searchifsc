import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AllModule } from './branch-list/all.module';
import { BranchListComponent } from './branch-list/branch-list.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BranchListComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AllModule,
    BrowserAnimationsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
