import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchList'
})
export class SearchListPipe implements PipeTransform {
  transform(items: any[], args?: string): any {
    if (!items) {
        return [];
    }
    if (!args) {
        return items;
    }
    if (args) {
      args = args.toLowerCase();
      return items.filter(function (report: any) {
          let isTrue = false;
          if (report.incidentDetails) {
            if (report.incidentDetails.status.toLowerCase().indexOf(args) > -1) {
              isTrue = true;
          }
          if (isTrue) {
              return report;
          } 
          }
     
      });
    }

    // return items.filter(singleItem => singleItem.status.toLowerCase().includes(value.toLowerCase()));
}
}
