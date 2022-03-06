import { Component } from '@angular/core';
import { FullScheduleService } from './full-schedule.service';
import { IFullSchedule } from './ifull-schedule';
import { IShowDetails } from './ishow-details';
import { IShowDetailsData } from './ishow-details-data';
import { IShowDetailsS } from './ishow-details-s';
import { ShowDetailsService } from './show-details.service';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show';

   showDetailsS: IShowDetailsS ={
    name:'',
    language:'',
    runtime:0,
    rating:0,
    image:'',
    summary:''  
   }

  showDetails: IShowDetailsData ={
    name: '',
    episodes: []
  }

  fullSchedule: IFullSchedule={
     name: '',
     time: '',
     days:[]
   }

  constructor(private showDetailsService: ShowDetailsService, private fullScheduleService: FullScheduleService ) {}  

   doSearch(searchValue: string ) {   
    this.showDetailsService.getShowDetails(searchValue)
    .subscribe(data => this.showDetails = data);
     this.showDetailsService.getShowDetailsS(searchValue)
     .subscribe(data => this.showDetailsS = data);
    
     
       this.fullScheduleService.getFullSchedule(searchValue).subscribe(data => this.fullSchedule = data);

     }


   
  }

  


  






