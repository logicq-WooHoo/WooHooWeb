import { Component , OnInit} from '@angular/core';
import { ProfileService } from './profile.service';
import { LoginService } from '../../login/loginservice.service';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css'],
  providers:[ ProfileService ]
})
export class ProfileComponent implements OnInit {
 
  private userProfile:any;
  private user: any;

  constructor(private profileService:ProfileService,
    private loginService: LoginService){

    this.getUserProfile();
    this.user = loginService.getUserDetails();
    console.log(this.user);
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
