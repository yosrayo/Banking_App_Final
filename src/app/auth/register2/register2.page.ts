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
user =[] as any;
  signupForm: FormGroup;
  isTypePassword: boolean = true;
  data = [] as any;
  data2 = [] as any;
  constructor(private route: Router ,
    private router: ActivatedRoute,
     private userService : UserService) {
    //reçoi data from register etape 1 
    
     let data = this.route.getCurrentNavigation().extras.state;
     this.data.push(data);
     console.log("rrrrrrrrr", this.data[0].user)
   this.data2= this.data[0].user; 
   }

  ngOnInit() {
    this.data = history.state.someData;
  }


  registerUser() {
 
    this.userService.create(this.data2)
    .subscribe(
      res => {
       // this.route.navigate(['/register3']);
        alert("ajouter avec succés");
      },
      err => console.log(err)
    );

    
  }




}
