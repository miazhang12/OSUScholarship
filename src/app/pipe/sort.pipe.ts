import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'sort'
})
export class SortPipe {

  transform(array: Array<Object>, args: string): Array<Object> {
    if (array == null) {
      return null;
    }
	array.sort((a: any, b: any) => {
      let aProperty = getProperty(a,args);
      let bProperty = getProperty(b,args); 
      if (aProperty < bProperty ){
          return -1;
      }else if( aProperty > bProperty ){
          return 1;
      }else{
          return 0;
      }
	});
    return array;
  }
}

// Gets a (possibly nested) field on an object. Nested fields accessed using dot '.' notation.
function getProperty(obj, desc) {
    var arr = desc.split(".");
    while(arr.length && (obj = obj[arr.shift()]));
    return obj;
}
