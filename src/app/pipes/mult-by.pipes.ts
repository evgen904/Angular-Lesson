import {Pipe, PipeTransform} from '@angular/core';

@Pipe({
  name: 'mult'
})

export class MultByPipes implements PipeTransform{
  transform(num: number, mult: number = 2): number {
    return num * mult
  }
}
