import { Component, OnInit } from '@angular/core';
import { LandingService } from './landing.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
//import {TranslateService} from '@ngx-translate/core';
import {TranslateService} from 'ng2-translate';
import { SocialUser } from "angularx-social-login";
import { AuthService } from "angularx-social-login";
import { Routes, RouterModule, Router, ActivatedRoute } from "@angular/router";

@Component({
  selector: 'app-landing',
  templateUrl: './landing.component.html',
  styleUrls: ['./landing.component.css'],
  providers:[LandingService]
})

export class LandingComponent implements OnInit {

  constructor() {

   }

  ngOnInit() {
    
  }


}
