import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { ModalController } from '@ionic/angular';
import { User } from 'src/app/classes/user';
import { AuthFireService } from 'src/app/services/auth-fire.service';
import { OtpComponent } from './otp/otp.component';

@Component({
  selector: 'app-register3',
  templateUrl: './register3.page.html',
  styleUrls: ['./register3.page.scss'],
})
export class Register3Page implements OnInit {

  form: FormGroup;
  user = new User();
  constructor(
    private modalCtrl: ModalController,
    private auth: AuthFireService,
    private route: Router ,
    private router: ActivatedRoute,
  ) { }

  ngOnInit() {
    this.router.queryParams.subscribe(params => {
      if (params && params.special) {
        this.user = JSON.parse(params.special);
        console.log("ffffffff",this.user)
      }
    });
   
    this.form = new FormGroup({
      phone: new FormControl(null, {
        validators: [Validators.required, Validators.minLength(8), Validators.maxLength(8)]
      }),
    });

    this.router.queryParams.subscribe(params => {
      if (params && params.special) {
        this.user = JSON.parse(params.special);
        console.log("hhhhhh",this.user)
      }
    });
  }

  async signIn() {
    try {
      if(!this.form.valid) {
        this.form.markAllAsTouched();
        return;
      }
      console.log(this.form.value);

      const response = await this.auth.signInWithPhoneNumber('+216' + this.form.value.phone);
      console.log(response);

      const options: any = {
        component: OtpComponent,
        componentProps: {
          phone: this.form.value.phone
        },
        swipeToClose: true
      };
      const modal = this.modalCtrl.create(options);
      (await modal).present();
      const data: any = (await modal).onWillDismiss();
      console.log(data);
    } catch(e) {
      console.log(e);
    }
  }

}
