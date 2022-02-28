import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ImageService {

  constructor(private httpClient: HttpClient) { 
    getShowImage (id: number, url: string) {
      return this.httpClient.get
      (`https://api.tvmaze.com/shows/:id/images?q=${showImage}&appId=${environment.appId}`)
    }
    }
  }
}
