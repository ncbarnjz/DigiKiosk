import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';
import { LoginDetails, LoginService } from 'src/app/core/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: FormGroup;

  constructor(private fb: FormBuilder,
              private router: Router,
              private localService: LocalStorageService,
              private loginService: LoginService) {
    this.form = this.fb.group({
      mobile: ['', [Validators.required]],
      password: ['', [Validators.required]]
    }); 
   }

  ngOnInit(): void {
  }

  login() {
    console.log('submit', this.form.value);
    var loginDetails = this.form.value as LoginDetails;
    this.loginService.login(loginDetails).subscribe(result => {
      console.log('result', result);

      if (result) {
        // Store to local storage
        this.localService.set('details', result);
        this.localService.set('mobile', loginDetails.mobile);
        this.router.navigate(['/home']);
      }
    }); 
  }

}
