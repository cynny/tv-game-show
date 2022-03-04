import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { IimageData } from './iimage-data';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) {}

  getIimage(resolutions: string, url: string) {
    return this.httpClient.get<IimageData>
    (`https://api.tvmaze.com/shows/:id/images${resolutions}:${url}`)
    .pipe(Map(data => this.transformToIimage(data)))

  }

  private transformToIimage(IimageData){
    return {
      image: `https://static.tvmaze.com/uploads/images/${data.resolutions[0]/id}.jpg`,
      size: data.image.resolutions
    }
  }
}
