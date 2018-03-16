import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { routing, appRoutingProviders }  from './app.routing';
import { DatasourcesComponent } from './datasources/datasources.component';
import { MenuComponent } from './menu/menu.component';
import { HistoricalComponent } from './historical/historical.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { OverloadComponent } from './overload/overload.component';
import { BrokerComponent } from './broker/broker.component';
import { RemoteComponent } from './remote/remote.component';
import { CoordinatorComponent } from './coordinator/coordinator.component';
import { DatanodesComponent } from './datanodes/datanodes.component';
import { ZookeeperComponent } from './zookeeper/zookeeper.component';
import { KafkaComponent } from './kafka/kafka.component';
import { HsqlComponent } from './hsql/hsql.component';
import { MysqlComponent } from './mysql/mysql.component';
import { TasksComponent } from './tasks/tasks.component';
import { DatasourcesService } from './services/common.service';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    DatasourcesComponent,
    MenuComponent,
    HistoricalComponent,
    HeaderComponent,
    FooterComponent,
    OverloadComponent,
    BrokerComponent,
    RemoteComponent,
    CoordinatorComponent,
    DatanodesComponent,
    ZookeeperComponent,
    KafkaComponent,
    HsqlComponent,
    MysqlComponent,
    TasksComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
  ],
  providers: [appRoutingProviders,DatasourcesService],
  bootstrap: [AppComponent]
})
export class AppModule { }
