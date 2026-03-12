import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'maskExtra',
  standalone: false,
})
export class MaskExtraPipe implements PipeTransform {
   transform(value: string): string {

    if (!value) return '';

    if (value.length <= 100) {
      return value;
    }

    return value.slice(0, 100) + '...';
  }

}
