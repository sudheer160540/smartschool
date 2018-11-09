import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'history'
})
export class HistoryPipe implements PipeTransform {

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
              debugger
              if (report.incidentDetailsList) {
                  for(var i=0;i<report.incidentDetailsList.length;i++){
                if (report.incidentDetailsList[i].status.toLowerCase().indexOf(args) > -1) {
                  isTrue = true;
                }
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
