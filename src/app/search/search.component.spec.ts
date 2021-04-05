import { async, ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatIconModule } from '@angular/material/icon';
import { MatInputModule } from '@angular/material/input';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { Router } from '@angular/router';
import { RouterTestingModule } from '@angular/router/testing';

import { SearchComponent } from './search.component';

describe('SearchComponent', () => {
  let component: SearchComponent;
  let fixture: ComponentFixture<SearchComponent>;

  let router: Router;
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [SearchComponent],
      imports: [RouterTestingModule.withRoutes([]), MatIconModule, ReactiveFormsModule, MatInputModule, BrowserAnimationsModule]
    }).compileComponents();
    router = TestBed.get(Router);
    fixture = TestBed.createComponent(SearchComponent);
    router.initialNavigation();
    component = fixture.componentInstance;
    fixture.detectChanges();
    //.compileComponents();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should toogle search field', () => {
    const isSearchField = component.isSearchField;
    component.toogleSearchField()
    expect(component.isSearchField).toBe(!isSearchField);
  });

  it('should clear search field', () => {
    component.searchInputCtrl.setValue('xz');
    component.clearText()
    const searchInputFieldValue = component.searchInputCtrl.value;
    console.log(component.searchInputCtrl.value);
    expect(searchInputFieldValue).toBeNull();
  });
});
