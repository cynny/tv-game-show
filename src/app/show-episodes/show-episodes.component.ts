import { Component, Input, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { IShowEpisodes } from '../ishow-episodes';


@Component({
  selector: 'app-show-episodes',
  templateUrl: './show-episodes.component.html',
  styleUrls: ['./show-episodes.component.css']
})
export class ShowEpisodesComponent implements OnInit {

  @Input() episode: IShowEpisodes
  constructor() { 
    this.episode = {
      name: '',
      summary: ''
    }
  }

  ngOnInit(): void {    
  }

}
