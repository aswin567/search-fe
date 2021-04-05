import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpCommunicatorService } from '../http-communicator.service';
import { Result } from './../result/result';
@Injectable({
  providedIn: 'root'
})
export class SearchService {

  constructor(private httpCommunicatorService: HttpCommunicatorService) { }

  onSearchData(searchText: string): Observable<Array<Result>> {
    return this.httpCommunicatorService.getSearchData<Array<Result>>(searchText);
  }
}
