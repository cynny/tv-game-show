import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {map} from 'rxjs/operators';
import { IShowDetailsData } from './ishow-details-data';
import { IShowEpisodesData } from './ishow-episodes-data';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {

  constructor(private httpClient: HttpClient) {}

  getShowDetails(showName: string) {
    return this.httpClient.get<IShowDetailsData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)
  } 
  
  getEpisodes(showName: string){
    return this.httpClient.get<IShowEpisodesData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}&embed=episodes`)
    .pipe(map(data => this.transformToIShowEpisode(data)))
  }  

  private transformToIShowEpisode(data: IShowEpisodesData){
      return{
        name: data._embedded.episodes[0].name,
        summary: data._embedded.episodes[0].summary
      }
  }

}

