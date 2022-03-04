import { Component, Input, OnInit } from '@angular/core';
import { Iimage } from '../iimage';
import { IimageData } from '../iimage-data';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

 current: Iimage
 constructor (private ImageService: IimageData) {
   this.current = {

     url: '',
     resolutions: '',
     width: '',
     height: '',
     type: ''

   }
 }
  
 



  ngOnInit(): void {
    this.ImageService.getimage('original', 'https://static.tvmaze.com/uploads/images/original_untouched/0/1.jpg').
    subscribe(data => this.current = Image)
  }

}

