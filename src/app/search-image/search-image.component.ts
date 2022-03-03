import { Component, Input, OnInit } from '@angular/core';
import { Iimage } from '../iimage';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

 @Input() 
  ngOnInit(): void {
  }

}

