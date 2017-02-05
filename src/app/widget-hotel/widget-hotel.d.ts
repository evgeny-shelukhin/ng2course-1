interface activeHotel {
  name: string;
  images: activeHotelimages
  imagesActive: activeHotelimagesActive;
  address: string;
  phone: string;
  temperature: string;
}

interface activeHotelimages {
  large: Array<string>;
  small: Array<string>;
}

interface activeHotelimagesActive {
  large: string;
  small: string;
}


