import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'course-widget-social',
  templateUrl: './widget-social.component.html',
  styleUrls: ['./widget-social.component.css']
})
export class WidgetSocialComponent implements OnInit {

  @Input() activeHotel: activeHotel;

  constructor() { }

  ngOnInit() {
  }

}
