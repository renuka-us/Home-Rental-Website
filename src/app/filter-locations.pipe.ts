import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterLocations'
})
export class FilterLocationsPipe implements PipeTransform {

   transform(locations: any[], searchLocation: string): any[] {
    if (!searchLocation || searchLocation.trim() === '') {
      return locations; 
    }

    return locations.filter(location =>
      location.name.toLowerCase().includes(searchLocation.toLowerCase())
    );
  }

}
