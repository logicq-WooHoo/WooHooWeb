import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-remote',
  templateUrl: './remote.component.html',
  styleUrls: ['./remote.component.css']
})
export class RemoteComponent implements OnInit {

  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getMiddlemanagerStatus();
  }

  getMiddlemanagerStatus(){
      this.datasourcesService.getMiddlemanagerStatus().subscribe(data => {
        console.log(data);
        this.datas=data;
      });
  }

}
