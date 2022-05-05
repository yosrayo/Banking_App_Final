import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Action } from 'src/app/classes/action';

@Component({
  selector: 'app-detail-transaction',
  templateUrl: './detail-transaction.page.html',
  styleUrls: ['./detail-transaction.page.scss'],
})
export class DetailTransactionPage implements OnInit {
  action = [] as any;
  back: boolean;
  constructor(public router: Router, private route: ActivatedRoute) {
    this.route.queryParams.subscribe((params) => {  
      let action = this.router.getCurrentNavigation().extras.state;
     console.log("yosraaaa",action);
});
   
  }

  ngOnInit() {
    const data = this.router.url.split('/');
    console.log(data);
    if (data[1] == 'home') this.back = true;
    else this.back = false;
  }



}
