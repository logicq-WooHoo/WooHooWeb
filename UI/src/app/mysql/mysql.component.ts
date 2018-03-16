import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';
@Component({
  selector: 'app-mysql',
  templateUrl: './mysql.component.html',
  styleUrls: ['./mysql.component.css']
})
export class MysqlComponent implements OnInit {

  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getMysqlStatus();
  }

  getMysqlStatus(){
      this.datasourcesService.getMysqlStatus().subscribe(data => {
        console.log(data);
        this.datas=data;
      });
  }
}
