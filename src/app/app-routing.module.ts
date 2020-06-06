import { MainComponent } from './main/main.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import { AuthGuard } from './auth.guard';
import { AuthCompGuard } from './auth-comp.guard';

const routes: Routes = [
  {
    path: 'login',
    canLoad: [AuthGuard],
    loadChildren: () => import('./login/login.module').then(m => m.LoginModule)
  },
  {
    path: 'list',
    canLoad: [AuthGuard],
    loadChildren: () => import('./branch-list/branch-list.module').then(m => m.BranchListModule)
  },
  {
    path: '',
    canActivate: [AuthCompGuard],
    component: MainComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
