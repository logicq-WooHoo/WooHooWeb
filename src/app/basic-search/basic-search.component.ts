import { Component, OnInit } from '@angular/core';
import { BasicSearchService } from '../services/basicsearch.service';

@Component({
  selector: 'app-basic-search',
  templateUrl: './basic-search.component.html',
  styleUrls: ['./basic-search.component.css'],
  providers: [BasicSearchService],
})
export class BasicSearchComponent implements OnInit {

  entitytype:string="";
  location:string="";

  constructor(private basicSearchService: BasicSearchService) {
   }

  ngOnInit() {
    
  }

  search(){
    let request={
      entitytype:this.entitytype,
      location:this.location
    }

    this.basicSearchService.searchAccordingToEntity(request).subscribe(data=>{

    })
  }


}
