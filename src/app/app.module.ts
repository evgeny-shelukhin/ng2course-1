import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent } from './app.component';
import { WidgetHotelComponent } from './widget-hotel/widget-hotel.component';
import { WidgetWeatherComponent } from './widget-weather/widget-weather.component';
import { WidgetSocialComponent } from './widget-social/widget-social.component';
import { CityPipe } from './city.pipe';

@NgModule({
  declarations: [
    AppComponent,
    WidgetHotelComponent,
    WidgetWeatherComponent,
    WidgetSocialComponent,
    CityPipe
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
