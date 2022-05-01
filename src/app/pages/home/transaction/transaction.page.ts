import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Action } from 'src/app/classes/action';
import { ActionService } from 'src/app/services/action.service';

@Component({
  selector: 'app-transaction',
  templateUrl: './transaction.page.html',
  styleUrls: ['./transaction.page.scss'],
})
export class TransactionPage implements OnInit {
  segmentValue = '1';
  back: boolean;
  newHeight = 0;
  listAction = [] as any;
  constructor(public router: Router , private actionService:ActionService) { }

  ngOnInit() {
    //retour page home
    const data = this.router.url.split('/');
    console.log(data);
    if(data[1] == 'home') this.back = true;
    else this.back = false;
    //get action list
    this.actionService.getActionIdUser(1).subscribe((res) => {
      this.listAction = res;
    });
  }
 
  scroll(event) {
    const value = event.detail.scrollTop;
    console.log(value, this.newHeight);
    if(value > 40) {
      this.newHeight += 5; // this.newHeight = this.newHeight + 5
    } else {
      this.newHeight = 0;
    }
    if(value > 180 && this.newHeight <= 65) {
      this.newHeight += 50;
    }
  }

}
