import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'city'
})
export class CityPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    if (args === 'none') {
      return value;
    } else {
      return value.filter((element) => {
        return element.city === args;
      });
    }
  }

}
