import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Hot Weather Widget';

  hotels: Array<any> = [
    {
      name: 'Treehotel',
      images: {
        large: [
          'assets/images/treehotel-1.jpg',
          'assets/images/treehotel-2.jpg'
        ],
        small: [
          'assets/images/treehotel-1-sm.jpg',
          'assets/images/treehotel-2-sm.jpg'
        ]
      },
      imagesActive: {
        large: 'assets/images/treehotel-1.jpg',
        small: 'assets/images/treehotel-1-sm.jpg'
      },
      address: `Treehotel/Brittas Pensionat
                Edeforsväg 2 A
                960 24 Harads
                Sverige`,
      city: 'Harads',
      phone: '+46 (0)928-103 00',
      temperatureAir: '-4',
      temperatureWater: '25',
      followers: 1550,
      following: 460
    },
    {
      name: 'Icehotel',
      images: {
        large: [
          'assets/images/icehotel-1.jpg',
          'assets/images/icehotel-2.jpg'
        ],
        small: [
          'assets/images/icehotel-1-sm.jpg',
          'assets/images/icehotel-2-sm.jpg'
        ]
      },
      imagesActive: {
        large: 'assets/images/icehotel-1.jpg',
        small: 'assets/images/icehotel-1-sm.jpg'
      },
      address: `Marknadsvägen 63
                981 91 Jukkasjärvi`,
      city: 'Jukkasjärvi',
      phone: '+46 706680263',
      temperatureAir: '-8',
      temperatureWater: '18',
      followers: 2550,
      following: 680
    },
    {
      name: 'Sovhotell',
      images: {
        large: [
          'assets/images/sovhotell-1.jpg',
          'assets/images/sovhotell-2.jpg'
        ],
        small: [
          'assets/images/sovhotell-1-sm.jpg',
          'assets/images/sovhotell-2-sm.jpg'
        ]
      },
      imagesActive: {
        large: 'assets/images/sovhotell-1.jpg',
        small: 'assets/images/sovhotell-1-sm.jpg'
      },
      address: `Stockholm`,
      city: 'Stockholm',
      phone: '0733-47 11 70',
      temperatureAir: '0',
      temperatureWater: '32',
      followers: 6750,
      following: 3260
    }
  ];

  activeHotel: activeHotel = this.hotels[0];

  constructor() { }

  handleActiveHotelUpdated = (activeHotel) => {
    return activeHotel;
  };

  handleActiveImageUpdated = (activeImage) => {
    return activeImage;
  }

}
