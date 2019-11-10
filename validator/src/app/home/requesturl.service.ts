import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
@Injectable({
  providedIn: 'root'
})
export class requestUrlService {
    

  constructor(private http: HttpClient) {

   }

   
    configUrl = 'http://0.0.0.0:9000/urlvalidator/url?url=';

    getScore(variable:string) {
  return this.http.get(this.configUrl+variable);
}

   
}