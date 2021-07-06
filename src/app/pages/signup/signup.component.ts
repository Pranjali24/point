import { Component, OnInit, ViewChild } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-signup',
  templateUrl: './signup.component.html',
  styleUrls: ['./signup.component.css']
})
export class SignupComponent implements OnInit {
  @ViewChild('form') userDetail:NgForm

  constructor(private router:Router,private loginService:LoginService) { }
  ngOnInit(): void {
  }
  getUserDetail(){
    // check user input field required
    console.log(this.userDetail.value);

    if(this.userDetail.valid){
      this.loginService.registerNewUser(this.userDetail.value);
      this.router.navigate(['/'])
    }
    else{
      this.router.navigate(['/signup'])
    }

  }

}
