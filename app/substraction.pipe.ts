import { Pipe, PipeTransform } from '@angular/core';
import { Pipe, PipeTransform } from '@angular/core';
@Pipe({
  name: 'substraction',
})
export class SubstractionPipe implements PipeTransform {
  transform(num1: number, num2: number): any {
    return num1 - num2;
  }
}
