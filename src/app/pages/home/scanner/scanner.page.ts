import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { QRScanner, QRScannerStatus } from '@ionic-native/qr-scanner/ngx';
@Component({
  selector: 'app-scanner',
  templateUrl: './scanner.page.html',
  styleUrls: ['./scanner.page.scss'],
})
export class ScannerPage implements OnInit {
  back: boolean;
  constructor(private qr : QRScanner , public router: Router) { }
 
  

  ngOnInit() {
    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
  }
  scan(){
    this.qr.prepare().then((status: QRScannerStatus)=>{
    if ( status.authorized){
      this.qr.show()
      document.getElementsByTagName("body")[0].style.opacity="0.5";
      this.qr.scan().subscribe((val)=>{
        alert(val);
        document.getElementsByTagName("body")[0].style.opacity="1";
      })
    } else if ( status.denied){

    }
    else{

    }
    }
    
    )
  }
}
