import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';

@Component({
  selector: 'app-transfert',
  templateUrl: './transfert.page.html',
  styleUrls: ['./transfert.page.scss'],
})
export class TransfertPage implements OnInit {
  back: boolean;
  constructor(public router: Router , private alertController : AlertController) { }

  ngOnInit() {
    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
  }
  submit(form){
   
  }

  async valider() {
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
    
      header: 'Pour Confirmer le transfer',
      message:'Vous allez effectuer un montant ****DT vers **** <br>. Merci d"entrez votre code confidentiel',
      inputs: [
        {
          name: 'code',
          type: 'text',
          placeholder: 'Entrer votre code confidentiel',
        },
        
      ],
      buttons: [
        {
          text: 'Annuler',
          role: 'cancel',
          cssClass: 'secondary',
          handler: () => {
            console.log('Confirm Cancel');
          },
        },
        {
          text: 'Confirmer',
          handler: () => {
            console.log('Confirm Ok');
            this.router.navigateByUrl('/confirm')
          },
        },
      ],
    });

    await alert.present();
  }
}
