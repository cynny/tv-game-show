import { Component } from '@angular/core';
import { IShowDetails } from './ishow-details';
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

  constructor(private showDetailsService: ShowDetailsService) {}  

   doSearch(searchValue: string) {   
     this.showDetailsService.getShowDetailsS(searchValue)
     .subscribe(data => this.showDetailsS = data);
  }
}
