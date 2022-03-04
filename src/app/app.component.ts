import { Component } from '@angular/core';
import { IShowDetailsData } from './ishow-details-data';
import { ShowDetailsService } from './show-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show';
  showDetails: IShowDetailsData ={
    name: '',
    episodes: []
  }

  constructor(private showDetailsService: ShowDetailsService) {}

  doSearch(searchValue: string) {
    this.showDetailsService.getShowDetails(searchValue)
    .subscribe(data => this.showDetails = data);
  }

}
