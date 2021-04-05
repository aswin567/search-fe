import { Component, OnDestroy } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';
import { SearchService } from '../search/search.service';
import { Result } from './result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent implements OnDestroy {

  results: Array<Result>;
  query: string;
  isLoading: boolean;
  initialLoaded: boolean;

  private destroy: Subject<void> = new Subject<void>();

  constructor(private route: ActivatedRoute, private searchService: SearchService, private router: Router) {
    this.observerQueryParams();
  }

  ngOnDestroy(): void {
    this.destroy.unsubscribe();
  }

  private observerQueryParams(): void {
    this.route.queryParams.pipe(takeUntil(this.destroy)).subscribe((query) => {
      const searchText = query.q;
      if (searchText) {
        this.query = searchText;
      } else {
        this.router.navigate(['/search']);
      }
      this.getData(this.query);
    }, (error)=>{
      throw error;
    });
  }

  private getData(searchText: string): void {
    if (searchText) {

      this.isLoading = true;
      this.searchService.onSearchData(searchText).pipe(takeUntil(this.destroy)).subscribe((res: Array<Result>) => {
        this.results = res;
        this.isLoading = false;
        this.initialLoaded = true;
      }, (error)=>{
        throw error;
      });
    }
  }
}
