import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { SearchService } from '../search/search.service';
import { Result } from './result';

@Component({
  selector: 'app-result',
  templateUrl: './result.component.html',
  styleUrls: ['./result.component.scss']
})
export class ResultComponent {

  results: Array<Result>
  query: string;
  isLoading: boolean;
  initialLoaded: boolean;

  constructor(private route: ActivatedRoute, private searchService: SearchService, private router: Router) { 
    this.route.queryParams.subscribe((query) => {
      let searchText = query['q'];
      if (searchText) {
        this.query = searchText
      } else {
        this.router.navigate(['/search']);
      }
      this.getData(this.query);
    })}

  getData(searchText: string): void {
    if(searchText){

      this.isLoading = true;
      this.searchService.onSearchData(searchText).subscribe((res: Array<Result>) => {
        this.results = res;
        this.isLoading = false;
        this.initialLoaded = true;
      });
    }
  }

}
