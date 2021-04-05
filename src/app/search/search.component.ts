import { Component, Input, OnChanges, OnDestroy, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges, OnDestroy {
  @Input() searchInput: string;
  @Input() isSearchField: boolean;
  searchInputCtrl = new FormControl();

  private destroy: Subject<void> = new Subject<void>();

  constructor(private router: Router) {
    this.searchInputCtrl.valueChanges.pipe(takeUntil(this.destroy)).subscribe((inputValue) => {
      if (inputValue && inputValue.length > 2) {
        this.showResult(inputValue);
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    const searchInputChanges = changes.searchInput;
    if (searchInputChanges && searchInputChanges.currentValue) {
      this.searchInputCtrl.setValue(searchInputChanges.currentValue);
    }
  }

  toogleSearchField(): void {
    this.isSearchField = !this.isSearchField;
  }

  clearText(): void {
    this.searchInputCtrl.reset();
  }

  showResult(inputValue: string): void {
    if (inputValue) {
      this.router.navigate(['/search-result'], { queryParams: { q: inputValue } });
    }
  }

  ngOnDestroy(): void {
    this.destroy.unsubscribe();
  }
}
