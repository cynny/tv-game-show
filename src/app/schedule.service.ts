import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IFullScheduleData } from './ifull-schedule-data';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ScheduleService {

  constructor(private httpClient:HttpClient) { }

  getCurrentTvShow(Mname:string, season: number){
   return this.httpClient.get<IFullScheduleData>(`https://api.tvmaze.com/schedule/full`).pipe(map(data =>this.transformToIFullSchedule(data)))
   
  }

  private transformToIFullSchedule(data: IFullScheduleData){
    return{
      Mname:data.name,
      season: data.season,
      date: new Date(data.airdate),
      time: data.airstamp,
      image:`https://static.tvmaze.com/uploads/images/original_untouched/${data.image.original}.jpg`

    }
  }
}
