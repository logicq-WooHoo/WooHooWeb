import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-overload',
  templateUrl: './overload.component.html',
  styleUrls: ['./overload.component.css']
})
export class OverloadComponent implements OnInit {
  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getOverloadStatus();
  }

  getOverloadStatus(){
      this.datasourcesService.getOverloadStatus().subscribe(data => {
        console.log(data);
        this.datas=data;
      });
  }
}
