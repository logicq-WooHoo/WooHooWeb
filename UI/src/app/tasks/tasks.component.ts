import { Component, OnInit } from '@angular/core';
import {DatasourcesService} from '../services/common.service';
@Component({
  selector: 'app-tasks',
  templateUrl: './tasks.component.html',
  styleUrls: ['./tasks.component.css']
})
export class TasksComponent implements OnInit {

  datas:any;
  constructor(private datasourcesService : DatasourcesService) { }

  ngOnInit() {
    this.getTasksStatus();
  }

  getTasksStatus(){
      this.datasourcesService.getTasksStatus().subscribe(data => {
        console.log(data);
        this.datas=data;
      });
  }
}
