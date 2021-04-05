import { TestBed } from '@angular/core/testing';
import { Observable, of } from 'rxjs';
import { HttpCommunicatorService } from '../http-communicator.service';
import { MockJsonData } from '../http-communicator.service.spec';
import { Result } from '../result/result';

import { SearchService } from './search.service';

describe('SearchService', () => {
  let service: SearchService;
  class MockHttpCommunicatorService {
    getSearchData(searchText: string): Observable<Array<Result>> {
      return of(MockJsonData)
    }
  }
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers:[{
        provide: HttpCommunicatorService, useClass: MockHttpCommunicatorService
      }]
    });
    service = TestBed.inject(SearchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  
  it('should be get search data', () => {
    const serviceOutput = service.onSearchData('ele');
    expect(serviceOutput).toBeDefined();
  });
});
