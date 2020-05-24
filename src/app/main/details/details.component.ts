import { FIELDS, DISPLAY_LIST } from './../../api.constant';
import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.sass']
})
export class DetailsComponent implements OnInit {
  @Input() details = null;
  private lists = DISPLAY_LIST;
  detailList = [];
  private keys = FIELDS;
  constructor() { }

  ngOnInit(): void {
    this.lists.forEach((ele, i)  => {
      this.detailList.push({key: ele,
        value: this.details[this.keys[i]]
      });
    });
  }

}
