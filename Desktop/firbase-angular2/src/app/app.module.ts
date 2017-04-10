import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { AngularFireModule, AuthProviders, AuthMethods } from 'angularfire2';

import { AppComponent } from './app.component';

export const firebaseConfig = {
  apiKey: "AIzaSyA0z_D8_bmElcqRdUBjiIAJU690JAySCzQ",
  authDomain: "angular2-firebase-1eaf8.firebaseapp.com",
  databaseURL: "https://angular2-firebase-1eaf8.firebaseio.com",
  projectId: "angular2-firebase-1eaf8",
  storageBucket: "angular2-firebase-1eaf8.appspot.com",
  messagingSenderId: "777916741412"
};

const firebaseAuth = {
  provider: AuthProviders.Google,
  method: AuthMethods.Redirect
}

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    AngularFireModule.initializeApp(firebaseConfig)
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
