import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'phoneFormat'
})
export class PhoneFormatPipe implements PipeTransform {

  transform(value: string): string {
    if (!value) return '';

    const cleanNumber = value.replace(/\D/g, '');

    if (cleanNumber.length !== 12) {
      return value;
    }
    const countryCode = cleanNumber.substring(0, 3);
    const operatorCode = cleanNumber.substring(3, 5);
    const part1 = cleanNumber.substring(5, 8);
    const part2 = cleanNumber.substring(8, 10);
    const part3 = cleanNumber.substring(10, 12);

    return `+${countryCode} (${operatorCode}) ${part1}-${part2}-${part3}`;
  }
}
