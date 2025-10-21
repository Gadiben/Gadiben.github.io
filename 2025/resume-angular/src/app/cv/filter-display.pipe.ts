import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filterDisplay',
  standalone: true
})
export class FilterDisplayPipe implements PipeTransform {
  transform(items: any[]): any[] {
    if (!items) return [];
    return items.filter(item => item.display === undefined || item.display === true);
  }
}
