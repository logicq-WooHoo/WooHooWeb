import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-coordinator',
  templateUrl: './coordinator.component.html',
  styleUrls: ['./coordinator.component.css']
})
export class CoordinatorComponent implements OnInit {
  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getCoordinatorStatus();
  }

  getCoordinatorStatus(){
      this.datasourcesService.getCoordinatorStatus().subscribe(data => {
        console.log(data);
        this.datas=data;
      });
  }

}
