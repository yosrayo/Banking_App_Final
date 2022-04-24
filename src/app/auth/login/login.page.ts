import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signupForm: FormGroup;

  user: User = new User();
  errorMessage: string;
  constructor(private authService: AuthService, private router: Router) { }

  ngOnInit() {
  }
  login(){
    this.authService.logIn(this.user)
      .subscribe({   
     next: ()=>{localStorage.setItem('currentUser', JSON.stringify(this.user))
    this.router.navigateByUrl('/home')},
      error: ()=>{this.errorMessage="error :  Username or password is incorrect"} 
        }
      )
  }
}
