import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'abv'
})
export class AbvPipe implements PipeTransform {

  transform(value: unknown, ...args: unknown[]): unknown {
    let symbol = '%';
    if (value !== undefined && value !== null && typeof (value) === 'number') {
      if(args.length > 0) {
        if(args[0] === 1) {
          symbol = 'º';
        }else if(args[0] === 0) {
          symbol = '%';
        }else{
          console.error('Invalid argument for pipe "abv"');
        }
      }
      return value + symbol;
    }
    console.error('AbvPipe: invalid input');
    return value;
  }

}
