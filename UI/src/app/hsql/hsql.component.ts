import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-hsql',
  templateUrl: './hsql.component.html',
  styleUrls: ['./hsql.component.css']
})
export class HsqlComponent implements OnInit {

  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getHsqlStatus();
  }

  getHsqlStatus(){
      this.datasourcesService.getHsqlStatus().subscribe(data => {
        console.log(data);
        this.datas=data;
      });
  }
}
