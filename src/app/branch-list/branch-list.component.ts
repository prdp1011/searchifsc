import { Component, OnInit, ViewChild } from '@angular/core';
import {MatTableDataSource} from '@angular/material/table'
import { MatPaginator } from '@angular/material/paginator';

const ELEMENT_DATA: any[] = [
  {branch: 1, ifsc: 'Hydrogen', bank: 1.0079, district: 'H', state: 'delhi', action: ''},
  ];
@Component({
  selector: 'app-branch-list',
  templateUrl: './branch-list.component.html',
  styleUrls: ['./branch-list.component.sass']
})
export class BranchListComponent implements OnInit {
  // displayedColumns = ['branch', 'ifsc', 'bank', 'district', 'state', 'action' ];
  // dataSource = new MatTableDataSource<any>(ELEMENT_DATA);
  // @ViewChild(MatPaginator, {static: true}) paginator: MatPaginator;

  constructor() { }

  ngOnInit(): void {
    // this.dataSource.paginator = this.paginator;
  }

}
