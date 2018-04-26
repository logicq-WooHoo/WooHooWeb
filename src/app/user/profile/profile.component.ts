import { Component , OnInit} from '@angular/core';
import { ProfileService } from './profile.service';


@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ ProfileService ]
})
export class ProfileComponent implements OnInit {
 
  private userProfile:any;

  constructor(private profileService:ProfileService){

    this.getUserProfile();
  }


  getUserProfile(){

    //Need to change hard code value 1 as user login
    this.profileService.getUserProfile(1).subscribe(data =>{
      this.userProfile=data;
    });

  }


  ngOnInit() {

  }
   
}
