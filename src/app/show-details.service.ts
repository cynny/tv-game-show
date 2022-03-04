import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { IShowDetailsDataS } from './ishow-details-data-s';

import {map} from 'rxjs/operators';
import { IApiResponseData } from './iapi-response-data';


@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {  

  constructor(private httpClient: HttpClient) {}


  getShowDetailsS(showName: string) {
    return this.httpClient.get<IShowDetailsDataS>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)
    .pipe(map(data=>this.transformToIShowDetailsS(data)))    
  }  

  private transformToIShowDetailsS(data: IShowDetailsDataS){
    return {
      name:data.name,      
      language:data.language,
      runtime:data.runtime,
      rating:data.rating.average,
      image:data.image.medium,
      summary:data.summary.replace(/<[^>]*>/g, '')
    } 

  getShowDetails(showName: string) {
    return this.httpClient.get<IApiResponseData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}&embed=episodes`)
    .pipe(map(data => this.transformToIShowDetails(data)))

  }
  
  private transformToIShowDetails(data: IApiResponseData){
    let showEpisodes: { img: string; name: string; summary: string; }[] = [];
    data._embedded.episodes.forEach(element => {
      showEpisodes.push({
        img: element.image.medium,
        name: element.name,
        summary: element.summary.replace(/<[^>]*>/g, '')
      })
    })
    return {
      name: data.name,
      episodes: showEpisodes
    }
  }

}

