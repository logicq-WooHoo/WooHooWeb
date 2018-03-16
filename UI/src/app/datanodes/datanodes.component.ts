import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-datanodes',
  templateUrl: './datanodes.component.html',
  styleUrls: ['./datanodes.component.css']
})
export class DatanodesComponent implements OnInit {

  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getDataNodesStatus();
  }

  getDataNodesStatus(){
      this.datasourcesService.getDataNodesStatus().subscribe(data => {
        console.log(data);
        this.datas=data;
      });
  }

}
