import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';
import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';
import { QRScanner } from '@ionic-native/qr-scanner/ngx';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { environment } from '../environments/environment';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';

import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';

import { QRCodeModule } from 'angularx-qrcode';
import { RowPipe } from './row.pipe';


@NgModule({
  declarations: [AppComponent, RowPipe],
  entryComponents: [],
  imports: [BrowserModule,
     IonicModule.forRoot(),
      AppRoutingModule , 
      HttpClientModule ,
      QRCodeModule,
      provideFirebaseApp(() => initializeApp(environment.firebase)), 
      provideAuth(() => getAuth()), 
      provideFirestore(() => getFirestore())
      
      
     
      
 ],
  providers: [{ provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, QRScanner , RowPipe ],
  bootstrap: [AppComponent],
})
export class AppModule {}
