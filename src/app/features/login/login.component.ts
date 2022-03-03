import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { LoginDetails, LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder, private loginService: LoginService) {
    this.form = this.fb.group({
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }); 
   }

  ngOnInit(): void {
  }

  login() {
    console.log('submit', this.form.value);
    this.loginService.login(this.form.value as LoginDetails).subscribe(result => {
      console.log('result', result);
    }); 
  }

}
