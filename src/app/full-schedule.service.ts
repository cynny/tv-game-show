import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFullScheduleData } from './ifull-schedule-data';
import { map } from 'rxjs/operators';
import { IApiResponseData } from './iapi-response-data';

@Injectable({
  providedIn: 'root'
})
export class FullScheduleService {

  constructor(private httpClient: HttpClient) { }

  getFullSchedule(name: string){
   return this.httpClient.get<IFullScheduleData>(`https://api.tvmaze.com/singlesearch/shows?q=${name}`).pipe
   (map(data =>this.transformToIFullSchedule(data)))
  }

  private  transformToIFullSchedule(data: IFullScheduleData){
   return{
    name: data.name,
    time: data.schedule.time,
    days: data.schedule.days.map(x =>"" + x)

   }
  }


}
