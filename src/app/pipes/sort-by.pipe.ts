import { Pipe, PipeTransform } from '@angular/core';
import { Photos } from '../components/others/interfaces';
import * as _ from 'underscore';
import * as moment from 'moment';

@Pipe({
  name: 'sortBy'
})
export class SortByPipe implements PipeTransform {

  transform(photo: Photos[], type: string = 'added_at'): Photos[] {
    switch(type) {
      case "added_at":
        /* return _.sortBy(photo, (photos: Photos) => moment(photos.id, 'YYYY-MM-DD')) */
        return _.sortBy(photo, (photos: Photos) => photos.title)
      case "popularity":
        return _.sortBy(photo, (photos: Photos) => photos.thumbnailUrl)
      case "rutation":
        return _.sortBy(photo, (photos: Photos) => photos.url)
      default:
        return photo
    }
  }

}
