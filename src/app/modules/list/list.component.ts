import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';
export interface listDetail {
  Model: string;
  RAM: string;
  HDD: string;
  Location: string;
  Price: string;
}

@Component({
  selector: 'app-list',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss'],
})
export class ListComponent implements OnInit {
  public list: listDetail[];
  public start: any = 0;
  public end: any = 10;

  constructor(public _commonService: CommonService) {
    this.list = this._commonService.list;
  }

  ngOnInit(): void {
    this._commonService.isFilter.subscribe((res) => {
      if (res) {
        this.list = this._commonService.list;
      }
    });
    this._commonService.pageDetail.subscribe((res) => {
      if (res) {
        this.start = res.start;
        this.end = res.end;
      }
    });
  }
}
