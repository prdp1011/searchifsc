import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';
import { BranchListRoutingModule } from './branch-list-routing.module';
import { AllModule } from './all.module';
import { BranchListComponent } from './branch-list.component';
import { AddBranchComponent } from './add-branch/add-branch.component';


@NgModule({
  declarations: [
    BranchListComponent,
    AddBranchComponent],
  imports: [
    CommonModule,
    AllModule,
    BranchListRoutingModule
  ],
  entryComponents: [AddBranchComponent]
})
export class BranchListModule { }
