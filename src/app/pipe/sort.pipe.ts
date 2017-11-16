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
          let aName = getProperty(a,"name");
          let bName = getProperty(b,"name");
          if (aName < bName ){
            return -1;
          }else if( aName > bName ){
            return 1;
          }else{
            return 0;
          }
      }
	});
    return array;
  }
}

// Gets a (possibly nested) field on an object. Nested fields accessed using dot '.' notation.
function getProperty(obj, desc) {
    var arr = desc.split(".");
    while(arr.length && (obj = obj[arr.shift()]));

    if(desc == "award.amount"){
        obj = convertAmountToInteger(obj);
    }else if(desc == "award.standardDeadline"){
        obj = convertDeadlineToDate(obj);
    }

    return obj;
}

// Converts a string describing the amount of the scholarship to a single integer value for sorting
function convertAmountToInteger(amount){
    if(amount == ""){
        return 0;
    }else{
        if(amount.indexOf("cost of attendance") != -1){ // probably a full cost of attendence
            return Number.MIN_SAFE_INTEGER;
        }
        amount = amount.replace(/,/g, ""); //remove commas from amounts
        var re = /(\d|,)+/g; //regex to detect continuous integer values
        var m;
        var numeral = null;
        while (m = re.exec(amount)){
            var intAmount = parseInt(m[0]);
            if(numeral == null || intAmount > numeral) numeral = intAmount; //only take the largest amount shown
        }
        if(numeral != null){
            return numeral*-1; //want DESC order (make amounts negative)
        }else{
            return 0;
        }
    }
}

// Converts a string describing the deadline of the scholarship to a Date value for sorting
function convertDeadlineToDate(deadline){
    if(deadline == ""){
        return new Date("9999-12-31");
    }else{
        return new Date(deadline);        
    }
}
