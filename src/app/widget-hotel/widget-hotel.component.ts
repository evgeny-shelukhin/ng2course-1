import {Component, OnInit, Input, Output, EventEmitter} from '@angular/core';

@Component({
  selector: 'course-widget-hotel',
  templateUrl: './widget-hotel.component.html',
  styleUrls: ['./widget-hotel.component.css']
})
export class WidgetHotelComponent implements OnInit {

  @Input() hotels: Array<Object>;
  @Input() activeHotel: activeHotel;

  @Output() updateActiveHotel:EventEmitter<any> = new EventEmitter();
  @Output() updateActiveImage:EventEmitter<any> = new EventEmitter();

  constructor() { }

  ngOnInit() {
  }

  toggleActiveHotel = (hotel: activeHotel) => {
    this.activeHotel = hotel;
    this.updateActiveHotel.emit(this.activeHotel);
  };

  toggleActiveImage = (hotel: activeHotel, activeImage: string, activeImageSmall: string) => {
    this.toggleActiveHotel(hotel);
    this.activeHotel.imagesActive = {
      large: activeImage,
      small: activeImageSmall
    };
    this.updateActiveImage.emit(this.activeHotel.imagesActive);
  }

}
