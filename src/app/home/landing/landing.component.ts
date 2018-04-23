import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import {TranslateService} from '@ngx-translate/core';
import {TranslateService} from 'ng2-translate';
import { SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  private user: SocialUser;
  //defaultLocation:String="Pune Railway Station, Agarkar Nagar";
 

  constructor(private _formBuilder: FormBuilder,private translate: TranslateService,
    private authService: AuthService) {
    translate.setDefaultLang('en');
    translate.use('en');
   }

  ngOnInit() {

    var isLinear = true;
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.user = JSON.parse(localStorage.getItem('user'));
    
  }

  switchLanguage(language: string) {
    this.translate.use(language);
  }
  signOut(): void {
    localStorage.clear();
    this.user = null;
    this.authService.signOut();
  }
}