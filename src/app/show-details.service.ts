import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IShowDetailsData } from './ishow-details-data';
import { map } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {

  constructor(private httpClient: HttpClient) {}

  getShowDetails(showName: string) {
    return this.httpClient.get<IShowDetailsData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)
    .pipe(map(data=>this.transformToIShowDetails(data)))    
  }  

  private transformToIShowDetails(data: IShowDetailsData){
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
