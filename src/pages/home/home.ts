import { Component, ChangeDetectorRef } from '@angular/core';
import { NavController } from 'ionic-angular';
import  firebase  from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';

@Component({
  selector: 'page-home',
  templateUrl: 'home.html',
  providers: [AngularFireAuth]
})
export class HomePage {
  provider = {
  	loggedIn: false,
  	name: '',
  	profileProfile: '',
  	email: ''
  }
  constructor(private fire:AngularFireAuth, public navCtrl: NavController, public ref: ChangeDetectorRef) {

  }

  login(provider) {
  	let signInProvider = null;
  	switch (provider) {
  		case "facebook":
  			signInProvider = new firebase.auth.FacebookAuthProvider();
  			break;
  		case "google":
  			signInProvider = new firebase.auth.GoogleAuthProvider();
  			break;
  		case "twitter":
  			signInProvider = new firebase.auth.TwitterAuthProvider();
  			break;
  		case "github":
  			signInProvider = new firebase.auth.GithubAuthProvider();
  			break;
  	}
  	this.fire.auth.signInWithPopup(signInProvider)
    .then(res => {
	    this.provider.loggedIn = true;
	    this.provider.name = res.user.displayName;
	    this.provider.email = res.user.email;
	    this.provider.profileProfile = res.user.photoURL;
	    this.ref.detectChanges();
	    console.log(res);
    });
  }

  logout() {
  	this.provider.loggedIn = false;
  	this.fire.auth.signOut();
  }

}
