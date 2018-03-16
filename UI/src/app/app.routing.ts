import { ModuleWithProviders } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {LoginComponent} from './login/login.component';
import {DashboardComponent} from './dashboard/dashboard.component';
import {DatasourcesComponent} from './datasources/datasources.component';
import {HistoricalComponent} from './historical/historical.component';
import {OverloadComponent} from './overload/overload.component';
import {BrokerComponent} from './broker/broker.component';
import {RemoteComponent} from './remote/remote.component';
import {CoordinatorComponent} from './coordinator/coordinator.component';
import {DatanodesComponent} from './datanodes/datanodes.component';
import {ZookeeperComponent} from './zookeeper/zookeeper.component';
import {KafkaComponent} from './kafka/kafka.component';
import {HsqlComponent} from './hsql/hsql.component';
import {MysqlComponent} from './mysql/mysql.component';
import {TasksComponent} from './tasks/tasks.component';

export  const  appRoutes: Routes = [

   { path: '',  pathMatch: 'full',component: LoginComponent },
   { path : 'dashboard',component: DashboardComponent},
   { path : 'datasources',component: DatasourcesComponent},
   { path : 'historical',component: HistoricalComponent},
   { path : 'overload',component: OverloadComponent},
   { path : 'broker',component: BrokerComponent},
   { path : 'remote',component: RemoteComponent},
   { path : 'coordinator',component: CoordinatorComponent},
   { path : 'datanodes',component: DatanodesComponent},
   { path : 'zookeeper',component: ZookeeperComponent},
   { path : 'kafka',component: KafkaComponent},
   { path : 'hsql',component: HsqlComponent},
   { path : 'mysql',component: MysqlComponent},
   { path : 'tasks',component: TasksComponent}

  //  {
  //   //  path: '',
  //   // component:CommonComponent ,
  //   children:[
  //    {path : 'dashboard',component: DashboardComponent,}
  //  ]
   //
  //  }

];


export const appRoutingProviders: any[] = [
];

export const routing: ModuleWithProviders = RouterModule.forRoot(appRoutes);
