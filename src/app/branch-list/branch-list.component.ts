import { BranchlistService } from './../services/branchlist.service';
import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';
import { FIELDS } from '../api.constant';
import { MatDialog } from '@angular/material/dialog';
import { AddBranchComponent } from './add-branch/add-branch.component';
import { Router } from '@angular/router';

const ELEMENT_DATA: any[] = [
  {branch: 1, ifsc: 'Hydrogen', bank: 1.0079, district: 'H', state: 'delhi', action: ''},
  ];
@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.sass']
})
export class BranchListComponent implements OnInit {
   displayedColumns = [...FIELDS, 'action'];
   dataSource = new MatTableDataSource<any>();
   username = '';
   @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor(
    public dialog: MatDialog,
    private router: Router,
    private branchServ: BranchlistService
  ) { }

  ngOnInit(): void {
    this.username = this.getUSerName();
    this.getDetails();
  }
  getDetails() {
    this.branchServ.getBranchList()
    .subscribe((data: any) => {
      this.dataSource = new MatTableDataSource(data);
      this.dataSource.paginator = this.paginator;
    });
  }
  addBranch() {
    const dialogRef = this.dialog.open(AddBranchComponent, {width: '800px'});
    dialogRef.afterClosed().subscribe((res) => {
      if(res) {
        this.getDetails();
      }
    });
  }
  logout() {
    this.router.navigate(['/']);
    localStorage.removeItem('token');
  }
  getUSerName() {
    return localStorage.getItem('name');
  }
}
