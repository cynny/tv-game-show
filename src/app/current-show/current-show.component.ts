import { Component, Input, OnInit } from '@angular/core';
import { IShowDetailsS } from '../ishow-details-s';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {

  @Input() currentS: IShowDetailsS

  constructor() { 
    this.currentS={
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
