import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from './../environments/environment'

@Injectable({
  providedIn: 'root'
})
export class HttpCommunicatorService {

  constructor(private httpClient: HttpClient) { }

  getSearchData<T>(searchText: string): Observable<T>{
    if(searchText){
      let params = new HttpParams();
      params = params.append('q', searchText);
      return this.httpClient.get<T>(environment.baseUrl,{params: params});
    }
  }
}
