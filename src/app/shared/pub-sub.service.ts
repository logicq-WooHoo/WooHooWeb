import { Injectable } from "@angular/core";
@Injectable()
export class PubSubService {
    private entries: any ={};
    private uniqueId: number =0;

    subscribe (entry, func) {
        let token = ''
        if (!this.entries[entry]) {
          token = (++this.uniqueId).toString()
          this.entries[entry] = {}
          this.entries[entry] = {
            token: token,
            func: []
          }
        }
        this.entries[entry]['func'].push(func)
        return token
      }
    
      publish (entry, args) {
        let that = this
        if (!this.entries[entry]) {
          return false
        }
        if (that.entries[entry]) {
          setTimeout(function () {
            let subscribers = that.entries[entry]['func']
            subscribers.forEach(function (item) {
              item(entry, args)
            })
          }, 0)
        }
        return true
      }
}