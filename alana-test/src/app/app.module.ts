import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouteReuseStrategy } from '@angular/router';

import { IonicModule, IonicRouteStrategy } from '@ionic/angular';
import { SplashScreen } from '@ionic-native/splash-screen/ngx';
import { StatusBar } from '@ionic-native/status-bar/ngx';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ModalAlertComponent } from './modal-alert/modal-alert.component'
import { Events } from 'ionic-angular';
import { HttpClientModule } from '@angular/common/http';

import { Api } from './Api/Api';

@NgModule({
  declarations: [AppComponent, ModalAlertComponent],
  entryComponents: [ModalAlertComponent],
  exports: [ModalAlertComponent],
  imports: [BrowserModule, IonicModule.forRoot(), AppRoutingModule, HttpClientModule],
  providers: [
    StatusBar,
    SplashScreen,
    Events,
    { provide: RouteReuseStrategy, useClass: IonicRouteStrategy }, 
    Api
    
  ],
  bootstrap: [AppComponent]
})
export class AppModule {}
