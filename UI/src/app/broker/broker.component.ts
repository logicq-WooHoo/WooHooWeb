import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-broker',
  templateUrl: './broker.component.html',
  styleUrls: ['./broker.component.css']
})
export class BrokerComponent implements OnInit {

  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getBrokerStatus();
  }

  getBrokerStatus(){
      this.datasourcesService.getBrokerStatus().subscribe(data => {
        this.datas=data;
      });
  }
}
