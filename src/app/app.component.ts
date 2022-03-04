import { Component } from '@angular/core';
import { IShowDetails } from './ishow-details';
import { IShowDetailsData } from './ishow-details-data';
import { ShowDetailsService } from './show-details.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'tv-show';
   showDetailsS: IShowDetails ={
    name:'',
    language:'',
    runtime:0,
    rating:0,
    image:'',
    summary:''  
   }

  constructor(private showDetailsService: ShowDetailsService) {}  

   doSearch(searchValue: string) {
     this.showDetailsService.getShowDetails(searchValue)
     .subscribe(data => this.showDetailsS = data);
  }

}
