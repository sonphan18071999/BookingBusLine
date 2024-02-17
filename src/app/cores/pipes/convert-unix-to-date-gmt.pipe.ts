import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'convertUnixToDateGMT',
  standalone: true
})
export class ConvertUnixToDateGMTPipe implements PipeTransform {

  transform(epochTime: string): string {
    if (!epochTime ) {
      return 'Invalid Epoch timestamp';
    }

    const gmtDate = new Date(+epochTime * 1000); // Convert seconds to milliseconds
    const hour = ('0' + gmtDate.getUTCHours()).slice(-2); // Get hour and ensure 2 digits
    const minute = ('0' + gmtDate.getUTCMinutes()).slice(-2); // Get minute and ensure 2 digits

    return `${hour}:${minute}`;
  }
}
