import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-historical',
  templateUrl: './historical.component.html',
  styleUrls: ['./historical.component.css']
})
export class HistoricalComponent implements OnInit {
  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getHistoricalStatus();
  }

  getHistoricalStatus(){
      this.datasourcesService.getHistoricalStatus().subscribe(data => {
        
        this.datas=data;
      });
  }

}
