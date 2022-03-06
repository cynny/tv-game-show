import { Component, Input, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { IShowDetailsData } from '../ishow-details-data';

@Component({
  selector: 'app-show-episodes',
  templateUrl: './show-episodes.component.html',
  styleUrls: ['./show-episodes.component.css']
})
export class ShowEpisodesComponent implements OnInit {

  @Input() current: IShowDetailsData
  constructor() {
    this.current = {
      name: '',
      episodes: []
    }
  }

  ngOnInit(): void {  
      
  }

}
