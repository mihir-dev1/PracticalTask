import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss']
})
export class PaginationComponent implements OnInit {

  public totalPageSize:any
  constructor(public _commonService: CommonService) {
    this.totalPageSize = this._commonService.list.length;
   }

  ngOnInit(): void {
  }

  getServerData(event:any) {

  }

}
