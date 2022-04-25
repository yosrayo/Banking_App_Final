import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { AuthService } from 'src/app/services/auth.service';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.page.html',
  styleUrls: ['./login.page.scss'],
})
export class LoginPage implements OnInit {
  signupForm: FormGroup;

  user: User = new User();
  errorMessage: string;
  u = {} as any;
  h: any;
  b=false;
  constructor(private authService: AuthService, private router: Router ) { }

  ngOnInit() {

  
  }


  login(f) {
    this.authService.login(f.value).subscribe({
      next: (response) => {
        console.log(response);
        localStorage.setItem('my_token', response['token']);
        this.router.navigateByUrl('/home');
      },
      error: (err) => {
        console.log('Erreur avec Login');
      },
    });
  }
  
}
