import { Component, OnInit } from '@angular/core';
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {

  current: IShowDetails

  constructor() { 
    this.current={
      name:'girls',
      language:'English',
      runtime:30,
      rating:5,
      image:'',
      summary:'girls summary'      
    }
  }

  ngOnInit(): void {
  }

}
