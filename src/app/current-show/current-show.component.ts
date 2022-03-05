import { Component, Input, OnInit } from '@angular/core';
import { ICurrentShowDetails } from '../icurrent-show-details';

@Component({
  selector: 'app-current-show',
  templateUrl: './current-show.component.html',
  styleUrls: ['./current-show.component.css']
})
export class CurrentShowComponent implements OnInit {

  @Input() currentShow: ICurrentShowDetails

  constructor() { 
    this.currentShow={
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
