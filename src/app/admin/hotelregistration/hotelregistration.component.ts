import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-hotelregistration',
  templateUrl: './hotelregistration.component.html',
  styleUrls: ['./hotelregistration.component.css']
})
export class HotelregistrationComponent implements OnInit {


  activeFlag: any = {
    personalDetailTabActive:String,
    restaurentDetailTabActive:String,
    setupRestaurentTabActive:String,
    menuItemTabActive:String,
    openRestaurentTabActive:String
  };


  constructor() {

    this.activeFlag.restaurentDetailTabActive='';
    this.activeFlag.setupRestaurentTabActive='',
    this.activeFlag.menuItemTabActive='',
    this.activeFlag.openRestaurentTabActive='',
    this.activeFlag.personalDetailTabActive='active';

   }

  ngOnInit() {
  }


  setActive(entity: string){
    if(entity=='PERSONALDETAIL'){
     this.activeFlag.restaurentDetailTabActive='';
     this.activeFlag.setupRestaurentTabActive='',
     this.activeFlag.menuItemTabActive='',
     this.activeFlag.openRestaurentTabActive='',
     this.activeFlag.personalDetailTabActive='active';
    }
    if(entity=='RESTAURENTDETAIL'){
     this.activeFlag.restaurentDetailTabActive='active';
     this.activeFlag.setupRestaurentTabActive='',
     this.activeFlag.menuItemTabActive='',
     this.activeFlag.openRestaurentTabActive='',
     this.activeFlag.personalDetailTabActive='';
    }
    if(entity=='SETUPRESTAURENT'){
     this.activeFlag.restaurentDetailTabActive='';
     this.activeFlag.setupRestaurentTabActive='active',
     this.activeFlag.menuItemTabActive='',
     this.activeFlag.openRestaurentTabActive='', 
     this.activeFlag.personalDetailTabActive='';
    }
    if(entity=='RESTAURENTMENU'){
     this.activeFlag.restaurentDetailTabActive='';
     this.activeFlag.setupRestaurentTabActive='',
     this.activeFlag.menuItemTabActive='active',
     this.activeFlag.openRestaurentTabActive='',
     this.activeFlag.personalDetailTabActive='';
    }
    if(entity=='OPENRESTAURENT'){
     this.activeFlag.restaurentDetailTabActive='';
     this.activeFlag.setupRestaurentTabActive='',
     this.activeFlag.menuItemTabActive='',
     this.activeFlag.openRestaurentTabActive='active',  
     this.activeFlag.personalDetailTabActive='';
    }
   }
}
