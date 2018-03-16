import { Injectable, Inject} from '@angular/core';
import { Http,Headers,RequestOptions,Response,RequestMethod,Request} from '@angular/http';
import { Observable } from 'rxjs';
import 'rxjs/add/operator/toPromise';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class DatasourcesService {
  // We can easily inject the API config using the DI token created when
  //  the application was bootstrapped

  constructor(private http :Http) {
  }

  getSignIn(request){
    console.log("Login service");
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.post("http://127.0.0.1:8090/user/login",request,options).map(res => res.json());
  }

  getSignUp(request){
    console.log("Logup service");
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.post("http://127.0.0.1:8090/api/user/registration",request,options).map(res => res.json());
  }

  getDatasources(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loaddatasource",options).map(res => res.json());
  }

  getHistoricalStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadhistorical",options).map(res => res.json());
  }

  getRemoteStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadhistorical",options).map(res => res.json());
  }

  getOverloadStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadoverlord",options).map(res => res.json());
  }

  getBrokerStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadbroker",options).map(res => res.json());
  }

  getCoordinatorStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadcoordinator",options).map(res => res.json());
  }

  getHdfsStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadhdfs",options).map(res => res.json());
  }

  getDataNodesStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loaddatanodes",options).map(res => res.json());
  }

  getZookeeperStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadzookeeper",options).map(res => res.json());
  }

  getKafkaStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadkafka",options).map(res => res.json());
  }

  getHsqlStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadhsql",options).map(res => res.json());
  }

  getMysqlStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadmysql",options).map(res => res.json());
  }

  getTasksStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadtask",options).map(res => res.json());
  }

  getMiddlemanagerStatus(){
    let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
    let options = new RequestOptions({ headers: postheaders });
    return this.http.get("http://172.31.72.100:8080/yukonmonitor/yukonreport/loadmiddlemanager",options).map(res => res.json());
  }
  // getData(request :any){
  //   let postheaders = new Headers({'Content-Type': 'application/json','Access-Control-Allow-Origin':'*'});
  //   let options = new RequestOptions({ headers: postheaders });
  //   //return this.http.post(this.apiUrl ,request ,options).map(res =>res.json());
  //   return this.http.post("",request ,options).map(res => res);
  // }
}
