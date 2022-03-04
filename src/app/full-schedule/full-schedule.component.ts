import { Component, OnInit } from '@angular/core';
import { IFullSchedule } from '../ifull-schedule';
import { ScheduleService } from '../schedule.service';

@Component({
  selector: 'app-full-schedule',
  templateUrl: './full-schedule.component.html',
  styleUrls: ['./full-schedule.component.css']
})
export class FullScheduleComponent implements OnInit {

  schedule:IFullSchedule
  constructor(private scheduleService:ScheduleService) {
    this.schedule = {
      image: '',
      Mname: '',
      season: 0,
      date: new Date,
      time:''
      

    }
   }

  ngOnInit(): void {
    this.scheduleService.getCurrentTvShow('All American', 4).subscribe(data => this.schedule)
  }

}
