var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
import { Component } from '@angular/core';
import { NavController } from 'ionic-angular';
import firebase from 'firebase';
import { AngularFireAuth } from 'angularfire2/auth';
var HomePage = /** @class */ (function () {
    function HomePage(fire, navCtrl) {
        this.fire = fire;
        this.navCtrl = navCtrl;
        this.facebookLoggedIn = false;
        this.facebook = {
            loggedIn: false,
            name: '',
            profileProfile: '',
            email: ''
        };
        this.google = {
            loggedIn: false,
            name: '',
            profileProfile: '',
            email: ''
        };
    }
    HomePage.prototype.loginWithFacebook = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new firebase.auth.FacebookAuthProvider())
            .then(function (res) {
            _this.facebook.loggedIn = true;
            _this.facebook.name = res.user.displayName;
            _this.facebook.email = res.user.email;
            _this.facebook.profileProfile = res.user.photoURL;
            console.log(res);
        });
    };
    HomePage.prototype.loginWithGoogle = function () {
        var _this = this;
        this.fire.auth.signInWithPopup(new firebase.auth.GoogleAuthProvider())
            .then(function (res) {
            _this.facebook.loggedIn = true;
            _this.facebook.name = res.user.displayName;
            _this.facebook.email = res.user.email;
            _this.facebook.profileProfile = res.user.photoURL;
            console.log(res);
        });
    };
    HomePage.prototype.logout = function () {
        this.facebook.loggedIn = false;
        this.fire.auth.signOut();
    };
    HomePage = __decorate([
        Component({
            selector: 'page-home',
            templateUrl: 'home.html',
            providers: [AngularFireAuth]
        }),
        __metadata("design:paramtypes", [AngularFireAuth, NavController])
    ], HomePage);
    return HomePage;
}());
export { HomePage };
//# sourceMappingURL=home.js.map