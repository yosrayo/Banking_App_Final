import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { Facture } from 'src/app/classes/facture';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-marchant',
  templateUrl: './marchant.page.html',
  styleUrls: ['./marchant.page.scss'],
})
export class MarchantPage implements OnInit {
  back: boolean;
  facture: Facture = new Facture();
  errorMessage: string;
  ionicForm: FormGroup;
 
  constructor(private  router:  Router) { }

  ngOnInit() {

    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
  }
  submit(form){
   
  }

}
