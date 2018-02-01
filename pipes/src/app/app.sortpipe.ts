import { Pipe, PipeTransform } from '@angular/core';

@Pipe({name: 'sort'})

export class SortPipe implements PipeTransform {
    transform(value: any[], args: String): any {
      if(args==='ascend'){
        return value.sort();
      }else if(args==='descend'){
        return value.sort().reverse();
      }
      
        
    }
  }
