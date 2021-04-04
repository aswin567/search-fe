import { Component, OnInit } from '@angular/core';
import { FormControl } from '@angular/forms';
import { Router } from '@angular/router';
import {SearchService} from './search.service';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss']
})
export class SearchComponent implements OnInit {

  isSearchField: boolean;
  seachInput = new FormControl('');
  constructor(private searchService: SearchService, private router: Router ) { 
    this.seachInput.valueChanges.subscribe((inputValue)=>{
      if(inputValue.length > 2){
        this.router.navigate(['/search-result'], { queryParams:{q: inputValue}});
      }
    });
  }

  ngOnInit(): void {
  }

  toogleSearchField(): void{
    this.isSearchField = !this.isSearchField;
  }

}
