import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-zookeeper',
  templateUrl: './zookeeper.component.html',
  styleUrls: ['./zookeeper.component.css']
})
export class ZookeeperComponent implements OnInit {

  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getZookeeperStatus();
  }

  getZookeeperStatus(){
      this.datasourcesService.getZookeeperStatus().subscribe(data => {
        console.log(data);
        this.datas=data;
      });
  }
}
