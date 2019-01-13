import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

/*
  Generated class for the ApiServiceProvider provider.

  See https://angular.io/guide/dependency-injection for more info on providers
  and Angular DI.
*/
@Injectable()
export class ApiServiceProvider {
  apiUrl = 'www.testapi.com/api/' // add api url here

  constructor(public http: HttpClient) {
    console.log('Hello ApiServiceProvider Provider');
  }

  // post data to server
  submitData(data: any){
    return this.http.post(this.apiUrl + 'saveData', data);
  }

}
