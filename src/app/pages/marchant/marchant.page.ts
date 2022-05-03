import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController } from '@ionic/angular';
import { Facture } from 'src/app/classes/facture';
import { ActionService } from 'src/app/services/action.service';
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
 
  constructor(private  router:  Router ,
     private alertController : AlertController , 
    private actionService : ActionService) { }

  ngOnInit() {

    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
  }
  submit(form){
   
  }


  async valid() {
    console.log("rrrrrrrrrr", this.facture)
    const alert = await this.alertController.create({
      cssClass: 'my-custom-class',
    
      header: 'Pour Confirmer la facture',
      message:'Vous allez effectuer une facture à ****  . Le montant ** DT. Merci d"entrez votre code confidentiel ',
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
          /* this.actionService.payFacture( 1,2,this.facture)
            .subscribe(
              res => {
                this.router.navigateByUrl('/confirm')
              },
              err => console.log(err)
            );
         */
            this.router.navigateByUrl('/confirm')
          },
        },
      ],
    });

    await alert.present();
  }


}
