//working on editing the original string from JSON
import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'newline'
})
export class NewlinePipe implements PipeTransform {

  transform(value: string, newValue: string): string {
    if(value.includes(";")){
      for (var i=0; i<(value.match(/;/g) || []).length; i++){
        newValue = value.replace(";", "\n");
      }
    }
    else newValue = value;

    console.log(newValue);
    return newValue;
  }

}
