import { Component } from '@angular/core';
import { DataService } from 'src/app/services/data.service';

@Component({
  selector: 'app-hi',
  template: `<h3> HI component => {{ textFromHello }}</h3>`
})

export class HiComponent {
  textFromHello: any;
  constructor(private _dataService: DataService) {}

  ngOnInit() {
    this.textFromHello = this._dataService.textFromHello;
  }
}
