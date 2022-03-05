import { Component } from '@angular/core';
import { IEpisode } from './iepisode';
import { ICurrentShowDetails } from './icurrent-show-details';
import { ShowDetailsService } from './show-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show';

   currentShowDetails: ICurrentShowDetails ={
    name:'',
    language:'',
    runtime:0,
    rating:0,
    image:'',
    summary:''  
   }

  episodeDetails: IEpisode ={    
    episodes: []
  }


  constructor(private showDetailsService: ShowDetailsService) {}  

   doSearch(searchValue: string) {    
     this.showDetailsService.getCurrentShowDetails(searchValue)
     .subscribe(data => this.currentShowDetails = data);
     this.showDetailsService.getEpisodeDetails(searchValue)
    .subscribe(data => this.episodeDetails = data);
  }
}
