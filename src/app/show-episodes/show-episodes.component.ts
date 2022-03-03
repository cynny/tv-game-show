import { Component, OnInit } from '@angular/core';
import { Subscriber } from 'rxjs';
import { IShowEpisodes } from '../ishow-episodes';
import { ShowDetailsService } from '../show-details.service';

@Component({
  selector: 'app-show-episodes',
  templateUrl: './show-episodes.component.html',
  styleUrls: ['./show-episodes.component.css']
})
export class ShowEpisodesComponent implements OnInit {

  episode: IShowEpisodes
  constructor(private showDetailsService: ShowDetailsService) { 
    this.episode = {
      name: '',
      summary: ''
    }
  }

  ngOnInit(): void {
    this.showDetailsService.getEpisodes('girls').
    subscribe(data => this.episode = data)
  }

}
