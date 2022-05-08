import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController, LoadingController, ToastController } from '@ionic/angular';
import { Camera, CameraPermissionType, CameraResultType, CameraSource, ImageOptions } from "@capacitor/camera";
import { UserService } from 'src/app/services/user.service';
import { User } from 'src/app/classes/user';
@Component({
  selector: 'app-edite-profile',
  templateUrl: './edite-profile.page.html',
  styleUrls: ['./edite-profile.page.scss'],
})
export class EditeProfilePage implements OnInit {
  photo = "";
  back: boolean;
  base64: string = "";
  u: User[];
  user: User = new User();
  actif = {} as any ;
  id : number;
  constructor(
    public navCtrl: NavController,
    public loadingCtrl: LoadingController,
    public toastCtrl: ToastController,
    public router: Router,
    public userService: UserService
  ) { }

  ngOnInit() {
    this.actif = JSON.parse(localStorage.getItem('user'));
    this.id = this.actif.id_user
    console.log("ddddddd", this.id)
    //back to home
    const data = this.router.url.split('/');
    console.log(data);
    if (data[1] == 'home') this.back = true;
    else this.back = false;

    //camera
    Camera.requestPermissions({ permissions: ['photos'] })
    console.log("jjjjj", this.base64)

  }

  pickImagefromGallery() {
    var options: ImageOptions = {
      source: CameraSource.Photos,
      resultType: CameraResultType.DataUrl
    }
    Camera.getPhoto(options).then((result) => {
      this.base64 = result.dataUrl;
    }, (err) => {
      alert(err)
    })
    console.log("jjjjj", this.base64)
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


  update() {

    this.userService.updateUserX( 1,this.user)
      .subscribe((res) => {
       // this.u = res;
        this.router.navigate(['/home']);
        alert("ajouter avec succés");
        localStorage.setItem("user", JSON.stringify(this.u));

      },
        err => console.log(err)
      );
  }



}
