import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: 'app.component.html',
  styleUrls: ['app.component.scss'],
})
export class AppComponent {
  static API_URL="http://localhost:8089/user/login";
  public pages: any[] = [
    {title: 'Accueil', url: '/home', icon: 'home'},
    {title: 'Compte', url: '/profile', icon: 'person-circle'},
    {title: 'Recharge telephonique', url: '/recharge', icon: 'phone-portrait'},
    {title: 'transfert dargent', url: '/transfert', icon: 'cash'},
    {title: 'paiment marchant', url: '/marchant', icon: 'wallet', },
    {title: 'paiment facture', url: '/facture', icon: 'newspaper',},
    {title: 'Scanner et payement', url: 'scanner', icon: 'scan-circle', },
  ];

  constructor() {}

  signOut() {
    console.log('signout');
  }
}
