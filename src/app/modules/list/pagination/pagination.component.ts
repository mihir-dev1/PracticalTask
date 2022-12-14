import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-pagination',
  templateUrl: './pagination.component.html',
  styleUrls: ['./pagination.component.scss'],
})
export class PaginationComponent implements OnInit {
  public totalPageSize: any;
  constructor(public _commonService: CommonService) {
    this.totalPageSize = this._commonService.list.length;
  }

  ngOnInit(): void {}

  getServerData(event: any) {
    let data: any = {};
    if (event.pageIndex !== 0) {
      data['start'] =
        event.pageIndex == 1
          ? event.pageIndex
          : event.pageIndex * event.pageSize - (event.pageSize - 1);
      data['end'] = event.pageIndex * event.pageSize;
    } else {
      data['start'] = 1;
      data['end'] = 1 * event.pageSize;
    }
    this._commonService.pageDetail.next(data);
  }
}
