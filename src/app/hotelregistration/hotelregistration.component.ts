import { Component, OnInit } from '@angular/core';
import { RegistrationService } from './registration.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';

@Component({
  selector: 'app-hotelregistration',
  templateUrl: './hotelregistration.component.html',
  styleUrls: ['./hotelregistration.component.css']
})
export class HotelregistrationComponent implements OnInit {

  isLinear = false;
  firstFormGroup: FormGroup;
  secondFormGroup: FormGroup;
  thirdFormGroup: FormGroup;
  fourthFormGroup: FormGroup;
  fifthFormGroup: FormGroup;

  title:string="";
  firstName:string="";
  lastName:string="";
  gender:string="";
  phoneNumber:string="";
  email:string="";
  restaurantName:string="";
  addressLine1:string="";
  addressLine2:string="";
  country:string="";
  state:string="";
  city:string="";
  pin_code:string="";

  
  constructor(private _formBuilder: FormBuilder) { }

  ngOnInit() {
    var isLinear = true;
    
    this.firstFormGroup = this._formBuilder.group({
      firstCtrl: ['', Validators.required]
    });
    this.secondFormGroup = this._formBuilder.group({
      secondCtrl: ['', Validators.required]
    });
    this.thirdFormGroup = this._formBuilder.group({
      thirdCtrl: ['', Validators.required]
    });
    this.fourthFormGroup = this._formBuilder.group({
      fourthCtrl: ['', Validators.required]
    });
    this.fifthFormGroup = this._formBuilder.group({
      fifthCtrl: ['', Validators.required]
    });

  }

}
