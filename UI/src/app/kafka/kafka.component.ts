import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';

@Component({
  selector: 'app-kafka',
  templateUrl: './kafka.component.html',
  styleUrls: ['./kafka.component.css']
})
export class KafkaComponent implements OnInit {

  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getKafkaStatus();
  }

  getKafkaStatus(){
      this.datasourcesService.getKafkaStatus().subscribe(data => {
        console.log(data);
        this.datas=data;
      });
  }
}
