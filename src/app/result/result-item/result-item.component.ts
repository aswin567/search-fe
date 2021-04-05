import { Component, Input } from '@angular/core';
import { Result } from '../result';

@Component({
  selector: 'app-result-item',
  templateUrl: './result-item.component.html',
  styleUrls: ['./result-item.component.scss']
})
export class ResultItemComponent {

  @Input() result: Result;

}
