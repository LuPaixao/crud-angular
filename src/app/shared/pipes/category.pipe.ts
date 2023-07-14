import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'category'
})
export class CategoryPipe implements PipeTransform {

  transform(value: string): string {
    switch(value){
      case 'Irmão': return 'person';
      case 'Padre': return 'church';
    }
    return 'church';
  }

}
