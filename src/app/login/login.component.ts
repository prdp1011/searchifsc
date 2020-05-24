import { LoginService } from '../services/login.service';
import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.sass']
})
export class LoginComponent implements OnInit {
  form: FormGroup;
  isLoading: boolean;
  constructor(
    private fb: FormBuilder,
    private router: Router,
    private logServ: LoginService
  ) { }

  ngOnInit() {
    this.form = this.fb.group({
      username: ['', Validators.email],
      password: ['', Validators.required]
    });
  }

   onSubmit() {
     if (this.form.valid && !this.isLoading) {
      this.isLoading = true;
      this.logServ.login(this.form.value)
       .subscribe(({token}) => {
          this.isLoading = false;
          this.logServ.setToken('token', token);
          this.logServ.setToken('name', this.form.value.username);
          this.router.navigateByUrl('list');
        },
        () => {
          this.isLoading = false;
        }
       );
    }
  }

}
