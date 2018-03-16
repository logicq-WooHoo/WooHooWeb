import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  constructor(private router : Router) { }

  ngOnInit() {
  }
  // getDatasource(){
  //   this.router.navigateByUrl("/datasources");
  // }
  // getHistorical(){
  //   this.router.navigateByUrl("/historical");
  // }
  //
  // getOverload(){
  //   this.router.navigateByUrl("/overload");
  // }
  //
  // getBroker(){
  //   this.router.navigateByUrl("/broker");
  // }
  // getRemote(){
  //   this.router.navigateByUrl("/remote");
  // }
  // getCoordinator(){
  //   this.router.navigateByUrl("/coordinator");
  // }
  // gethdfs(){
  //   this.router.navigateByUrl("/hdfs");
  // }
  // getDataNodes(){
  //   this.router.navigateByUrl("/datanodes");
  // }
  // getZookeeper(){
  //   this.router.navigateByUrl("/zookeeper");
  // }
  // getKafka(){
  //   this.router.navigateByUrl("/kafka");
  // }
  // getHsql(){
  //   this.router.navigateByUrl("/hsql");
  // }
  // getMySql(){
  //   this.router.navigateByUrl("/mysql");
  // }
  // getTasks(){
  //   this.router.navigateByUrl("/tasks");
  // }
}
