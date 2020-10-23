import { Pipe, PipeTransform } from '@angular/core';
import { Photos } from '../components/others/interfaces';

@Pipe({
  name: 'order'
})
export class OrderPipe implements PipeTransform {

  transform(photo: Photos[], descending: 'yes' | 'no' = 'yes'): Photos[] {
    photo = photo.concat(); //slice()
    if(descending == 'no') return photo.reverse()
    return photo
  }

}
