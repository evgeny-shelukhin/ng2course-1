import {Component, OnInit, Input} from '@angular/core';

@Component({
  selector: 'course-widget-weather',
  templateUrl: './widget-weather.component.html',
  styleUrls: ['./widget-weather.component.css']
})
export class WidgetWeatherComponent implements OnInit {

  @Input() activeHotel: activeHotel;

  constructor() {
  }

  ngOnInit() {
  }

}
