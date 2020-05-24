import { FIELDS, DISPLAY_LIST } from './../../api.constant';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Component, OnInit } from '@angular/core';
import { MatDialogRef } from '@angular/material/dialog';
import { BranchlistService } from 'src/app/services/branchlist.service';

@Component({
  selector: 'app-add-branch',
  templateUrl: './add-branch.component.html',
  styleUrls: ['./add-branch.component.sass']
})
export class AddBranchComponent implements OnInit {
  form: FormGroup;
  list = [];
  field = [...FIELDS];
  display = [...DISPLAY_LIST];
  constructor(private fb: FormBuilder,
              private branchServ: BranchlistService,
              public dialogRef: MatDialogRef<AddBranchComponent>) { }

  ngOnInit(): void {
    this.field.splice(0, 1);
    this.display.splice(0, 1);
    this.createForm();
    this.branchServ.getBanks().subscribe((res: any) => {
      this.list = res;
      this.form.get('bank').setValue(res[0]);
    });


  }
  createForm() {
    const obj = {};
    obj['bank'] = [null, Validators.required];
    this.field.forEach(li => {
      obj[li] = ['', Validators.required];
    });
    this.form = this.fb.group(obj);
  }
  onSubmit() {
    if (this.form.valid) {
        this.branchServ.addBranch(this.form.value)
        .subscribe((res) => this.dialogRef.close(res));
    }
  }

}
