import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { AngularFireModule } from "@angular/fire";
import { AngularFireAuthModule } from "@angular/fire/auth";
import { FormsModule } from '@angular/forms';


 // Your web app's Firebase configuration
 var config = {
  apiKey: "AIzaSyADniKYA7nsvFvMlDURTxYOoJQAesOb49s",
  authDomain: "shifa-8bfcd.firebaseapp.com",
  databaseURL: "https://shifa-8bfcd.firebaseio.com",
  projectId: "shifa-8bfcd",
  storageBucket: "",
  messagingSenderId: "135858216461",
  appId: "1:135858216461:web:70b7b0429f5faacabe3f44"
};

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    AngularFireModule.initializeApp(config),
    AngularFireAuthModule,
    FormsModule

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
