interface activeHotel {
  name: string;
  images: activeHotelimages
  imagesActive: activeHotelimagesActive;
  address: string;
  city: string;
  phone: string;
  temperatureAir: string;
  temperatureWater: string;
  followers: number;
  following: number;
}

interface activeHotelimages {
  large: Array<string>;
  small: Array<string>;
}

interface activeHotelimagesActive {
  large: string;
  small: string;
}


