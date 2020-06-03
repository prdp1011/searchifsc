import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { BranchListComponent } from './branch-list.component';
import { AuthCompGuard } from '../auth-comp.guard';


const routes: Routes = [
  {
    path: '',
    canActivate: [AuthCompGuard],
    component: BranchListComponent
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class BranchListRoutingModule { }
