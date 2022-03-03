import { Component, Input, OnInit } from '@angular/core';
import { Iimage } from '../iimage';
import { IimageData } from '../iimage-data';

@Component({
  selector: 'app-search-image',
  templateUrl: './search-image.component.html',
  styleUrls: ['./search-image.component.css']
})
export class SearchImageComponent implements OnInit {

 
 private _iimage!: IimageData;
  public get image(): IimageData {
    return this._iimage;
  }
  public set image(value: IimageData) {
    this._iimage = value;
  }
 



  ngOnInit(): void {
  }

}

