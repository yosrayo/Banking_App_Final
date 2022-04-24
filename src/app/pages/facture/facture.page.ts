import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Facture } from 'src/app/classes/facture';
import { AuthService } from 'src/app/services/auth.service';
import { FactureService } from 'src/app/services/facture.service';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
})
export class FacturePage implements OnInit {
  back: boolean;
  facture: Facture = new Facture();
  errorMessage: string;
  ionicForm: FormGroup;
 
  constructor(private  authService:  AuthService, private  router:  Router) { }

  ngOnInit() {

    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
  }
  login(form){
    this.authService.logIn(form.value).subscribe((res)=>{
      this.router.navigateByUrl('home');
    });
  }
}
