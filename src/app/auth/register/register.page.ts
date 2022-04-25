import { Component, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { NavigationExtras, Router } from '@angular/router';
import { IonInfiniteScroll, ModalController, ToastController } from '@ionic/angular';
import { User } from 'src/app/classes/user';
import { UserService } from 'src/app/services/user.service';
@Component({
  selector: 'app-register',
  templateUrl: './register.page.html',
  styleUrls: ['./register.page.scss'],
})
export class RegisterPage implements OnInit {
  signupForm: FormGroup;
  isTypePassword: boolean = true;
  user: User = new User();

  constructor(private userService: UserService, private route: Router) {
  
  }

  ngOnInit() {

  
  }
 /// send data to register2
  x(){
    let navigationExtras: NavigationExtras = {
      state: {
        id: JSON.stringify(this.user)
      }
    };
    this.route.navigate(['register2'], navigationExtras);
    console.log("hhhhhhhh",this.user)
  }

 

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }


  

  next() {
    if (!this.signupForm.valid) {
      return;
    } else {
      let navigationExtras: NavigationExtras = {
        queryParams: {
          special: JSON.stringify(this.user)
        }
      };
      this.route.navigate(['register2'], navigationExtras);
      console.log("hhhhhhhh",this.user)
    }
  }

}
