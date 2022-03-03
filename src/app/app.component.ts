import { Component } from '@angular/core';
import { IShowDetailsData } from './ishow-details-data';
import { IShowEpisodes } from './ishow-episodes';
import { ShowDetailsService } from './show-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show';
  showDetails: IShowDetailsData ={
    name: ''
  } 
  episodeDetails: IShowEpisodes ={
    name: '',
    summary: ''
  }

  constructor(private showDetailsService: ShowDetailsService) {}

  doSearch(searchValue: string) {
    this.showDetailsService.getShowDetails(searchValue)
    .subscribe(data => this.showDetails = data);
    this.showDetailsService.getEpisodes(searchValue)
    .subscribe(data => this.episodeDetails = data);
  }

}
