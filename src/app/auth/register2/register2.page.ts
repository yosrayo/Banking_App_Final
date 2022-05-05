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

  constructor(private route: Router ,
    private router: ActivatedRoute,
     private userService : UserService) {
    //reçoi data from register etape 1 
    this.router.queryParams.subscribe((params) => {  
      this.data = this.route.getCurrentNavigation().extras.state;
     console.log("dataa",this.data);
});
   
  }

  ngOnInit() {
  }

 
 

 

  
    
  registerUser() {
 
    this.userService.create(this.data)
    .subscribe(
      res => {
        this.route.navigate(['/register3']);
        alert("ajouter avec succés");
      },
      err => console.log(err)
    );

    
  }




}
