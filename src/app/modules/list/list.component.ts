import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  public list:any;
  public start:any;
  public end:any;

  constructor(public _commonService:CommonService) {
    this.list = this._commonService.list;
  }

  ngOnInit(): void {
    this._commonService.isFilter.subscribe(res => {
      if(res) {
        this.list = this._commonService.list;
      }
    })
  }

}
