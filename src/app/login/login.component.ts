import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AppService } from '../services/app.service';
import { FormControl, FormGroup } from '@angular/forms';
@Component({
  selector: 'app-home',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  public loginGroup: FormGroup;
  constructor(private router: Router, private appService: AppService) { 
  }

  ngOnInit() {
    this.loginGroup = new FormGroup({
      mblNumber: new FormControl(''),
      passwrd: new FormControl('')
    });
  }

  login() {
    this.appService.authenticate()
      .subscribe(data => {
        if (this.loginGroup.controls['mblNumber'].value == data['user'] && this.loginGroup.controls['passwrd'].value == data['password'])
        { this.goToHome() }
        else {
          return false;
        }
      });

  }
  goToHome() {
    this.router.navigate(['/home']);
  }
}
