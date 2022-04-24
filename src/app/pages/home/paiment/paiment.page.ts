import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

 

@Component({
  selector: 'app-paiment',
  templateUrl: './paiment.page.html',
  styleUrls: ['./paiment.page.scss'],
})
export class PaimentPage implements OnInit {
  public textToCode: string;
  public myAngularxQrCode: string = null;
  back: boolean;
  form: FormGroup;
 
  constructor(public router: Router ) { }

  ngOnInit() {
    ///back to home page
    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
/// controle de saisie
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(20), Validators.maxLength(20)]
      }),
    });
  }
  createQRCode() {
    if(!this.form.valid) {
      return;
    }else{
    this.myAngularxQrCode = this.textToCode;
   
  }
}
reset(){
  this.textToCode="";
  this.myAngularxQrCode="";
}
}
