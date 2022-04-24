import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'app-recharge',
  templateUrl: './recharge.page.html',
  styleUrls: ['./recharge.page.scss'],
})
export class RechargePage implements OnInit {
  back: boolean;
  form: FormGroup;
  constructor(public router: Router) { }

  ngOnInit() {
    /// bouton back
    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
////// formm valid
    this.form = new FormGroup({
  
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(10), Validators.maxLength(10)]
      }),
      cout: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(1), Validators.maxLength(3)]
      }),
      op: new FormControl('',
      { validators: [Validators.required] }
    ),
     
    });
  }
  onSubmit() {
    if (!this.form.valid) return;
    console.log(this.form.value);
  }
}
