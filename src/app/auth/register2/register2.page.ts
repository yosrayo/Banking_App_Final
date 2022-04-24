import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, NavigationExtras, Router } from '@angular/router';
import { User } from 'src/app/classes/user';

@Component({
  selector: 'app-register2',
  templateUrl: './register2.page.html',
  styleUrls: ['./register2.page.scss'],
})
export class Register2Page implements OnInit {
user = new User();
  signupForm: FormGroup;
  isTypePassword: boolean = true;
  data: any; // data from register etape1

  constructor(private route: Router ,private router: ActivatedRoute,) {
    //reçoi data from register etape 1 
    this.router.queryParams.subscribe(params => {
      if (params && params.special) {
        this.data = JSON.parse(params.special);
        console.log("ffffffff",this.data)
      }
    });
    this.initForm();
  }

  ngOnInit() {
  }

  initForm() {
    this.signupForm = new FormGroup({
      username: new FormControl('',
        { validators: [Validators.required] }
      ),
      compte: new FormControl('',
        { validators: [Validators.required] }
      ),
      bank: new FormControl('',
        { validators: [Validators.required] }
      ),
      id: new FormControl('',
        { validators: [Validators.required] }
      ),
      travail: new FormControl('',
        { validators: [Validators.required] }
      ),
     
    
    });
  }

  onChange() {
    this.isTypePassword = !this.isTypePassword;
  }

  onSubmit() {
    if (!this.signupForm.valid) return;
  else {
    let navigationExtras: NavigationExtras = {
      queryParams: {
        special: JSON.stringify(this.user)
      }
    };
    this.route.navigate(['register'], navigationExtras);
  }
 
  }
    
     



}
