import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customdate'
})
export class CustomDateFilter implements PipeTransform {

    transform(date: string): any {
       
        if (!date) {
            return date;
        }
        var res = date.split(".");
        var res1 = date.split(" ");
       
        return res[0]+':'+res[1]+" "+res1[res1.length-1];
    
        // return items.filter(singleItem => singleItem.status.toLowerCase().includes(value.toLowerCase()));
    }

}
