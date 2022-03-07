import { Component } from '@angular/core';
import { IEpisode } from './iepisode';
import { ICurrentShowDetails } from './icurrent-show-details';
import { ShowDetailsService } from './show-details.service';
import { IFullSchedule } from './ifull-schedule';
import { FullScheduleService } from './full-schedule.service';

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
  
  fullSchedule: IFullSchedule={
    name: '',
    time: '',
    days:[]
  }


  constructor(private showDetailsService: ShowDetailsService, private fullScheduleService: FullScheduleService ) {}  

   doSearch(searchValue: string) {    
     this.showDetailsService.getCurrentShowDetails(searchValue)
     .subscribe(data => this.currentShowDetails = data);
     this.showDetailsService.getEpisodeDetails(searchValue)
    .subscribe(data => this.episodeDetails = data);
    this.fullScheduleService.getFullSchedule(searchValue).subscribe(data => this.fullSchedule = data);
  }
}
