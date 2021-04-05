import { Component, Input, OnChanges, SimpleChanges } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import { SearchService } from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnChanges {
  @Input() searchInput: string;
  @Input() isSearchField: boolean;
  searchInputCtrl = new FormControl();

  constructor(private router: Router) {
    this.searchInputCtrl.valueChanges.subscribe((inputValue) => {
      if (inputValue && inputValue.length > 2) {
        this.router.navigate(['/search-result'], { queryParams: { q: inputValue } });
      }
    });
  }

  ngOnChanges(changes: SimpleChanges) {
    let searchInputChanges = changes['searchInput'];
    if (searchInputChanges && searchInputChanges.currentValue) {
      this.searchInputCtrl.setValue(searchInputChanges.currentValue)
    }
  }

  

  toogleSearchField(): void {
    this.isSearchField = !this.isSearchField;
  }

  clearText(): void {
    this.searchInputCtrl.reset();
  }
}
