import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import {Clipboard , WriteOptions} from "@capacitor/clipboard";
 

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
  text:string ="click"
  
  constructor(public router: Router ) { 

     this.textToCode="111111111111"
  }

  ngOnInit() {
  
    ///back to home page
    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
/// controle de saisie

this.createQRCode();
  }


  createQRCode() {
    this.myAngularxQrCode = this.textToCode;
   
  }
 
reset(){
  this.textToCode="";
  this.myAngularxQrCode="";
}

copy(){
  var options : WriteOptions ={
    string:this.text
  }
  Clipboard.write(options).then(()=>{
    alert("text copié")
  })
}
}
