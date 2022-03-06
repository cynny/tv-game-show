import { Component, Input, OnInit } from '@angular/core';
import { FullScheduleService } from '../full-schedule.service';
import { IFullSchedule } from '../ifull-schedule';

@Component({
  selector: 'app-full-schedule',
  templateUrl: './full-schedule.component.html',
  styleUrls: ['./full-schedule.component.css']
})
export class FullScheduleComponent implements OnInit {

  @Input() currentN: IFullSchedule
  constructor(private fullSchedule:FullScheduleService) { 
    this.currentN ={
      name: '',
     time: '',
     days:Array<string>

    ()}
  }

  ngOnInit(): void {
    
  }

}
