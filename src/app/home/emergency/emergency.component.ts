import { Component, OnInit } from '@angular/core';
import { EmergencySearchService } from './emergency.service';

@Component({
  selector: 'app-emergency-search',
  templateUrl: './emergency.component.html',
  styleUrls: ['./emergency.component.css'],
  providers: [EmergencySearchService],
})
export class EmergencySearchComponent implements OnInit {


  constructor(private emergencySearchService: EmergencySearchService) {
   }

  ngOnInit() {
    
  }


}
