import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { ICurrentShowDetailsData } from './icurrent-show-details-data';
import { IEpisodeData } from './iepisode-data';


@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {  

  constructor(private httpClient: HttpClient) {}


  getCurrentShowDetails(showName: string) {
    return this.httpClient.get<ICurrentShowDetailsData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)
    .pipe(map(data=>this.transformToICurrentShowDetails(data)))    
  }  

  private transformToICurrentShowDetails(data: ICurrentShowDetailsData){
    return {
      name:data.name,      
      language:data.language,
      runtime:data.runtime,
      rating:data.rating.average,
      image:data.image.medium,
      summary:data.summary.replace(/<[^>]*>/g, '')
    } 
  }

  getEpisodeDetails(showName: string) {
    return this.httpClient.get<IEpisodeData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}&embed=episodes`)
    .pipe(map(data => this.transformToIEpisode(data)))

  }
  
  private transformToIEpisode(data: IEpisodeData){
    let showEpisodes: { img: string; name: string; summary: string; }[] = [];
    data._embedded.episodes.forEach(element => {
      showEpisodes.push({
        img: element.image.medium,
        name: element.name,
        summary: element.summary.replace(/<[^>]*>/g, '')
      })
    })
    return {
      episodes: showEpisodes
    }
  }

}

