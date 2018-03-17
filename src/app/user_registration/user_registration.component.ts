import { Component, OnInit } from '@angular/core';
import { RegistrationService } from '../services/registration.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-user-registration',
  templateUrl: './user_registration.component.html',
  styleUrls: ['./user_registration.component.css']
})

export class UserRegistrationComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;

  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {

    var isLinear = true;
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
  }
}
