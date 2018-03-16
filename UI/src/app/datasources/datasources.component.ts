import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-datasources',
  templateUrl: './datasources.component.html',
  styleUrls: ['./datasources.component.css']
})
export class DatasourcesComponent implements OnInit {
  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getDataSource();
  }

  getDataSource(){
      this.datasourcesService.getDatasources().subscribe(data => {
        this.datas=data;
      });
  }

}
