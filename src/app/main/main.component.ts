import { MainService } from './../services/main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
class BankList {
  constructor(
    public bank = [],
    public state = [],
    public district = [],
    public branch = []
  ) {}
}
@Component({
  selector: 'app-main',
  templateUrl: './main.component.html',
  styleUrls: ['./main.component.sass']
})
export class MainComponent implements OnInit {
  form: FormGroup;
  formIfsc: FormGroup;
  list = new BankList();
  details = null;
  constructor(private fb: FormBuilder,
              private mainSer: MainService) { }

  ngOnInit(): void {
    this.onChange('bank');
    this.form = this.fb.group({
      bank: ['', Validators.required],
      state: ['', Validators.required],
      district: ['', Validators.required],
      branch: ['', Validators.required]
    });
    this.formIfsc = this.fb.group({
      ifsc: ['', Validators.required]
    });
  }
  onChange(subAdd) {
    if (subAdd === 'state') {
      this.list.branch = [];
      this.list.district = [];
      this.form.get('state').setValue(null);
    }
    this.mainSer.getBankDetails(subAdd)
    .subscribe((res: any) => this.list[subAdd] = res);
  }
  onSubmit() {
    if (this.form.valid) {
      this.mainSer.searchDetails()
    .subscribe((res) => this.details = res);
    }
  }
  onIfscSubmit({ifsc}) {
    if (this.formIfsc.valid) {
      this.mainSer.getDetails(ifsc)
    .subscribe((res) => this.details = res);
    }
  }

}
