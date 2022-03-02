import { Component, OnInit } from '@angular/core';
import { IShowEpisodes } from '../ishow-episodes';

@Component({
  selector: 'app-show-episodes',
  templateUrl: './show-episodes.component.html',
  styleUrls: ['./show-episodes.component.css']
})
export class ShowEpisodesComponent implements OnInit {

  episode: IShowEpisodes
  constructor() { 
    this.episode = {
      name: 'Pilot',
      summary: 'In the premiere of this comedy about twentysomething women navigating their way through life in New York, Hannah swings and misses at two curves when her parents rescind their financial support and she loses her unpaid internship. Meanwhile, Hannahs roommate, Marnie, throws a dinner party for their nomadic friend Jessa, whos returned from yet another journey.'
    }
  }

  ngOnInit(): void {
  }

}
