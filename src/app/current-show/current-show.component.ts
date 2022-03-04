import { Component, Input, OnInit } from '@angular/core';
import { IShowDetails } from '../ishow-details';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {

  @Input() current: IShowDetails

  constructor() { 
    this.current={
      name:'',
      language:'',
      runtime:0,
      rating:0,
      image:'',
      summary:''      
    }
  }

  ngOnInit(): void {    
  }

}
