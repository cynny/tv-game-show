import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IimageData } from './iimage-data';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) {}

  getShowDetails(showName: string) {
    return this.httpClient.get<ImageData>
    (`https://api.tvmaze.com/singlesearch/shows?q=${showName}`)

  }}
