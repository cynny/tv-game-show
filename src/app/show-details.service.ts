import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import { IShowDetailsData } from './ishow-details-data';

@Injectable({
  providedIn: 'root'
})
export class ShowDetailsService {

  constructor(private httpClient: HttpClient) {}

  getShowDetails(showName: string) {
    return this.httpClient.get<IShowDetailsData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)
  }
}
