import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
@Component({
  selector: 'app-edite-profile',
  templateUrl: './edite-profile.page.html',
  styleUrls: ['./edite-profile.page.scss'],
})
export class EditeProfilePage implements OnInit {
  back: boolean;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public router: Router
    ) { }

  ngOnInit() {
    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;

  }

  async sendData() {
    const loader = await this.loadingCtrl.create({
      duration: 2000
    });

    loader.present();
    loader.onWillDismiss().then(async l => {
      const toast = await this.toastCtrl.create({
    
        cssClass: 'bg-profile',
        message: 'Your Data was Edited!',
        duration: 3000,
        position: 'bottom'
      });

      toast.present();
      this.navCtrl.navigateForward('/home-results');
    });
  }
}
