import { LoginService } from './../services/login.service';
import { MainService } from './../services/main.service';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
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
  isNotFound: boolean;
  details = null;
  ifscNotFound: boolean;
  constructor(private fb: FormBuilder, private logServ: LoginService, private router: Router,
              private mainSer: MainService) { }

  ngOnInit(): void {
    this.form = this.fb.group({
      bank: ['', Validators.required],
      state: [{ value: '', disabled: true }, Validators.required],
      district: [{ value: '', disabled: true }, Validators.required],
      branch: [{ value: '', disabled: true }, Validators.required]
    });
    this.formIfsc = this.fb.group({
      ifsc: ['', Validators.required]
    });
    this.onChange('bank');
  }
  resetState() {
    ['state', 'district', 'branch'].forEach((field) => {
      this.form.get(field).setValue(null);
      this.form.get(field).disable();
    });
  }
  onChange(subAdd) {
    if (subAdd === 'state') {
      this.resetState();
    }
    this.form.get(subAdd).setValue(null);
    this.mainSer.getDropDownValues(subAdd)
    .subscribe((res: any) => {
      this.list[subAdd] = res;
      this.form.get(subAdd).enable();
    });
  }
  onSubmit() {
    this.isNotFound = false;
    if (this.form.valid) {
      this.mainSer.searchDetails(this.form.value)
    .subscribe((res) => {
      this.details = res[0];
      if (!res[0]) {
        this.isNotFound = true;
      }
    });
    }
  }
  onIfscSubmit({ifsc}) {
    this.ifscNotFound = false;
    if (this.formIfsc.valid) {
      this.mainSer.getIfsc(ifsc).subscribe(res => {
        this.details = res;
        if (!res) {
          this.ifscNotFound = true;
        }
      }, () =>  this.ifscNotFound = true);
    }
  }

}
