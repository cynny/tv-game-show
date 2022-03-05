import { Component, Input, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { IEpisode } from '../iepisode';

@Component({
  selector: 'app-show-episodes',
  templateUrl: './show-episodes.component.html',
  styleUrls: ['./show-episodes.component.css']
})
export class ShowEpisodesComponent implements OnInit {

  @Input() episodeDetails: IEpisode
  constructor() {
    this.episodeDetails = {      
      episodes: []
    }
  }

  ngOnInit(): void {    
  }

}
