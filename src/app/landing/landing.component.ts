import { Component, OnInit } from '@angular/core';
import { LandingService } from '../services/landing.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
import {TranslateService} from '@ngx-translate/core';


@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css']
})

export class LandingComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  languages="English,French".split(",");
  defaultLocation:String="Pune Railway Station, Agarkar Nagar";
  loginSignUp:String="Login/SignUp";

  constructor(private _formBuilder: FormBuilder,private translate: TranslateService) {
    translate.setDefaultLang('en');
   }

  ngOnInit() {

    var isLinear = true;
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }

  switchLanguage(language: string) {
    console.log("Language seleted : "+language)
    this.translate.use(language);
  }
}
