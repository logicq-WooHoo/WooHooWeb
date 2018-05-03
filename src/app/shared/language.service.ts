import { Injectable } from '@angular/core';
import { PubSubService } from './pub-sub.service';


@Injectable()
export class LanguageService {
    language: string = 'en';
    
    constructor(private pubSubService: PubSubService){
        
    }

   changeLanguage(newLanguage: string){
    this.language = newLanguage;
    this.pubSubService.publish('language', newLanguage);
   }

      getlanguage(){
          return this.language;
      }     
}
