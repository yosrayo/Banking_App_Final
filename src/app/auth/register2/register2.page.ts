import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {
user : User = new User();
  signupForm: FormGroup;
  isTypePassword: boolean = true;
  data: any; // data from register etape1

  constructor(private route: Router ,private router: ActivatedRoute, private userService : UserService) {
    //reçoi data from register etape 1 
    this.router.queryParams.subscribe(params => {
      if (params && params.special) {
        this.user = JSON.parse(params.special);
        console.log("ffffffff",this.user)
      }
    });
   
  }

  ngOnInit() {
  }

 
 

 

  x() {
    if (!this.signupForm.valid) return;
  else {
    let navigationExtras: NavigationExtras = {
      state: {
        special: JSON.stringify(this.user)
      }
    };
    this.route.navigate(['register3'], navigationExtras);
  }
 
  }
    
  registerUser() {
 
    this.userService.create(this.user)
    .subscribe(
      res => {
        this.route.navigate(['/login3']);
      },
      err => console.log(err)
    );

    alert("ajouter avec succés");
  }




}
