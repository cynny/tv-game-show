import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IimageData } from './iimage-data';



@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) {}

  getIimage(resolutions: string, url: string) {
    return this.httpClient.get<IimageData>
    (`https://api.tvmaze.com/shows/:id/images${resolutions}:${url}`)

  }

  private transformToIimage(IimageData){
    return {
      image: `https://static.tvmaze.com/uploads/images/${data.resolutions[0]/id}.jpg`,
      size: data.image.resolutions
    }
  }
}
