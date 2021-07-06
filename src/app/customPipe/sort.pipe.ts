import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe implements PipeTransform {

  transform(value: any) {
    console.log('in sort pipe ',value);

  if(value){
      const sortedValues = value.sort((a, b) => new Date(b.createdOn).getTime() - new Date(a.createdOn).getTime());
    return sortedValues;
  }
  return null;
  }

}
