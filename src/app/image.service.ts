import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IimageData } from './iimage-data';
import { url } from 'inspector';
import { ShowDetailsService } from './show-details.service';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) {}

  getImage(resolutions: string, url: string) {
    return this.httpClient.get<ImageData>
    (`https://api.tvmaze.com/shows/:id/images${resolutions}:${url}`)

  }}
