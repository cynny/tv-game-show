import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { map } from 'rxjs';
import { IShowDetailsDataS } from './ishow-details-data-s';

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
  }
}
