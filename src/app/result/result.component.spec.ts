import { HttpClient } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { MatToolbarModule } from '@angular/material/toolbar';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterTestingModule } from '@angular/router/testing';
import { Observable, of } from 'rxjs';
import { MockJsonData } from '../http-communicator.service.spec';
import { SearchComponent } from '../search/search.component';
import { SearchService } from '../search/search.service';
import { Result } from './result';

import { ResultComponent } from './result.component';

describe('ResultComponent', () => {
  let component: ResultComponent;
  let fixture: ComponentFixture<ResultComponent>;
  class MockSearchService {
    onSearchData(searchText: string): Observable<Array<Result>> {
      return of(MockJsonData)
    }
  }
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      imports: [ RouterTestingModule, HttpClientTestingModule, ReactiveFormsModule, MatFormFieldModule, MatInputModule, MatIconModule, MatToolbarModule, BrowserAnimationsModule  ],
      declarations: [ ResultComponent, SearchComponent ],
      providers: [{
        provide: SearchService, useClass: MockSearchService
      }]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ResultComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
