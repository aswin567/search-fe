import { async, inject, TestBed } from '@angular/core/testing';

import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpCommunicatorService } from './http-communicator.service';
import { Result } from './result/result';

describe('HttpCommunicatorService', () => {
  let service: HttpCommunicatorService;
  let httpMock: HttpTestingController;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule,
      ],
      providers: [
        HttpCommunicatorService
      ],
    });

    service = TestBed.get(HttpCommunicatorService);
    httpMock = TestBed.get(HttpTestingController);
  });

  xit('should fetch searc result as an Observable', async(inject([HttpTestingController, HttpCommunicatorService],
    (httpClient: HttpTestingController, service: HttpCommunicatorService) =>  {
      const resultJson = [
        {
          "postId": 80,
          "id": 400,
          "name": "quia aut consequatur sunt iste aliquam impedit sit",
          "email": "Brennon@carmela.tv",
          "body": "natus iure velit impedit sed officiis sint\nmolestiae non beatae\nillo consequatur minima\nsed ratione est tenetur"
        }
      ]
      service.getSearchData('bre').subscribe((result: Array<Result>)=>{
        expect(result.length).toBe(3);
      });

      let req = httpMock.expectOne('https://jsonplaceholder.typicode.com/comments?q=bre');
      expect(req.request.method).toBe("GET");
      req.flush(resultJson);
      httpMock.verify();
  })));
});
