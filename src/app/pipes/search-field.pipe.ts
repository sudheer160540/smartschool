import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'searchField'
})
export class SearchFieldPipe implements PipeTransform {
  transform(array: any[], query?: any): any {
    const searchableList = ['news', 'city', 'type', 'priority', 'createdDate','incidentDetails.status'];
    if (!array) {
      return [];
    }
    if (!query) {
      return array;
    }
 
    if (query) {
      query = query.toLowerCase();
      return array.filter(function (queston: any) {
          let isTrue = false;
          for (let i = 0; i < searchableList.length; i++ ) {
              // return student.StudentInfo.student[searchableList[i]].toLowerCase().includes(searchText);
              // const adminInput = admin.studentDetails === undefined ? 'studentInfo' : 'studentDetails';
              if (queston[searchableList[i]] != null) {
                  if (queston[searchableList[i]].toLowerCase().indexOf(query) > -1) {
                      isTrue = true;
                  }
                  if (isTrue) {
                      return queston;
                  }
              }
          }
      });
 
    }
 
  }

}
