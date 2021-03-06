import { getTestBed, TestBed } from '@angular/core/testing';
import { HttpClientTestingModule, HttpTestingController } from '@angular/common/http/testing';
import { HttpCommunicatorService } from './http-communicator.service';
import { Result } from './result/result';
import { environment } from 'src/environments/environment';

describe('HttpCommunicatorService', () => {
  let httpCommunicatorService: HttpCommunicatorService;
  let httpMock: HttpTestingController;
  let injector: TestBed;
  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [HttpClientTestingModule],
      providers: [HttpCommunicatorService]
    });
    injector = getTestBed();
    httpCommunicatorService = injector.get(HttpCommunicatorService);
    httpMock = injector.get(HttpTestingController);
  });
  afterEach(() => {
    httpMock.verify();
  });

  it('should fetch search result as an Observable', () => {

    httpCommunicatorService.getSearchData('bre').subscribe((result: Array<Result>) => {
      expect(result.length).toBe(1);
    });

    const req = httpMock.expectOne(`${environment.baseUrl}?q=bre`);
    expect(req.request.method).toBe('GET');
    req.flush(MOCK_JSON_DATA);
    httpMock.verify();
  });
});

export const MOCK_JSON_DATA = [
  {
    postId: 80,
    id: 400,
    name: 'quia aut consequatur sunt iste aliquam impedit sit',
    email: 'Brennon@carmela.tv',
    body: 'natus iure velit impedit sed officiis sint\nmolestiae non beatae\nillo consequatur minima\nsed ratione est tenetur'
  }
];
