import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';
import { AlertController, ModalController } from '@ionic/angular';
import { Action } from 'src/app/classes/action';
import { Facture } from 'src/app/classes/facture';
import { ActionService } from 'src/app/services/action.service';
import { AuthService } from 'src/app/services/auth.service';
import { FactureService } from 'src/app/services/facture.service';
import { AboutPage } from '../about/about.page';

@Component({
  selector: 'app-facture',
  templateUrl: './facture.page.html',
  styleUrls: ['./facture.page.scss'],
})
export class FacturePage implements OnInit {
  back: boolean;
  facture: Action = new Action();
  errorMessage: string;
  ionicForm: FormGroup;
  reference:number;
  amount: number;
 
  constructor( private  router:  Router , 
    private alertController : AlertController , 
    private actionService : ActionService) { }

  ngOnInit() {

    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
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
            this.actionService.add( 1,2,this.facture)
            .subscribe(
              res => {
                this.router.navigateByUrl('/confirm')
              },
              err => console.log(err)
            );
         
          },
        },
      ],
    });

    await alert.present();
  }


 


}
