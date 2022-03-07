import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { Subscription, timer } from 'rxjs';
import { LocalStorageService } from 'src/app/core/services/local-storage.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

  mobile: string = "";
  data: any;
  
  countDown:Subscription | undefined;
  counter = 30;
  tick = 1000;

  constructor(private fb: FormBuilder,
    private router: Router,
    private localService: LocalStorageService) {
      this.countDown = timer(0, this.tick)
      .subscribe(() => {
        if (this.counter > 0) {
          --this.counter;
        }      
      });
      
  }

  ngOnInit() {
    this.mobile = this.localService.get('mobile');
    this.data = this.localService.get('details');
  }

  submit(mobile: any) {
    alert(mobile);
  }

}
