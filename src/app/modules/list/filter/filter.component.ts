import { Component, OnInit } from '@angular/core';
import { CommonService } from 'src/app/core/common.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss'],
})
export class FilterComponent implements OnInit {
  public ramOption = [
    '2GB',
    '4GB',
    '8GB',
    '12GB',
    '16GB',
    '24GB',
    '32GB',
    '48GB',
    '64GB',
    '96GB',
  ];
  public location: any;
  public hddOption = ['SAS', 'SATA', 'SSD'];
  constructor(public _commonService: CommonService) {
    let allLocation = this._commonService.list.map((item) => item.Location);
    this.location = [...new Set(allLocation)];
  }

  ngOnInit(): void {}

  applyRam(item:any) {
    this._commonService.ramFilter(item);
  }

  applyLocation(event: any) {
    this._commonService.filterData(event.target.value, 'location');
  }

  applyHDD(event: any) {
    this._commonService.filterData(event.target.value, 'HDD');
  }

  formatLabel(value: number) {
    return value;
  }
}
