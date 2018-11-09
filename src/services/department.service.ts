import { Injectable } from '@angular/core';
import { AppURL } from '../url'
import { Http, Response, RequestOptions, Headers } from '@angular/http';
import { Observable, throwError } from 'rxjs';
import { map } from 'rxjs/operators';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { BehaviorSubject } from 'rxjs';
declare var  toastr:any
@Injectable()

export class DepartmentService {

  constructor(public http: HttpClient) { }
  getAllIncidentLogs(data) {
    return this.http.get(AppURL.api1 + 'Incidents?filter={"include": { "relation": "incidentDetails","order": "dateAnadTime DESC" , "scope": { "where":{"CheckIncident.SystemCode":"'+data+'"} } } }').pipe(map((res: Response) => res));
  }
  getAllIncidentH(login,data) {
    return this.http.get(AppURL.api1 + 'Incidents?filter={"include": { "relation": "incidentDetails","order": "dateAnadTime DESC" , "scope": { "where":{"CheckIncident.SystemCode":"'+login+'","status":"'+data+'"} } } }    ').pipe(map((res: Response) => res));
  }
  
  getIncidentLogs(data) {
    return this.http.get(AppURL.api1 + 'Incidents?filter={"where":{"dateAnadTime":{"gt":"' + data + '"}}}').pipe(map((res: Response) => res));
  }
  getIncidentLogsbyId(data) {
    return this.http.patch(AppURL.api1 + 'incidentDetails/' + data.id, data).pipe(map((res: Response) => res));
  }
  getIncidentLogsbyP(data) {
    return this.http.get(AppURL.api1 + 'Incidents?filter={"where":{"priority":"'+data+'"}}').pipe(map((res: Response) => res));

  }
  DeleteLog(data){
    return this.http.delete(AppURL.api1 + 'Incidents/'+data.id).pipe(map((res: Response) => res));
  }
  getIncidentLogsbyS(data) {
    return this.http.get(AppURL.api1 + 'Incidents?filter={"where":{"status":"'+data+'"}}').pipe(map((res: Response) => res));

  }
  getincidentDetails(data) {
    return this.http.get(AppURL.api1 + 'incidentDetails?filter={"where":{"IncidentId":"'+data.id+'"}}').pipe(map((res: Response) => res));
  }
  getAllIncidentLogs1(data) {
    //return this.http.get(AppURL.api1 + 'Incidents?filter={"include":{"relation":"incidentDetails","scope": { "where":{"CheckIncident.SystemCode":"'+data+'"} } } }').pipe(map((res: Response) => res));
    return this.http.get(AppURL.api1 + 'Incidents?filter={"where":{"status":"Open"},"include": { "relation": "incidentDetails","order": "dateAnadTime DESC" , "scope": { "where":{"CheckIncident.SystemCode":"'+data+'"} } } }').pipe(map((res: Response) => res));

   // return this.http.get(AppURL.api1 + 'Incidents?filter={"include":"incidentDetailsList","where":{"status":"Open"}}').pipe(map((res) => res));
  }

  patchIncidentStatus(data) {
    return this.http.patch(AppURL.api1 + 'Incidents/' + data.id, data).pipe(map((res: Response) => res));
  }

  getRecordsFromIncident(data) {
    return this.http.get(AppURL.api1 + `Incidents/${data.id}?filter={"include":"incidentDetailsList"}`).pipe(map((res) => res));

    //return this.http.get(AppURL.api1 + `Incidents/5b83aca3a838153d0cf112cc?filter={"include":"incidentDetailsList"}`).pipe(map((res: Response) => res));
  }
  success(title:string,message?:string){
    toastr.success(title,message)
  }
  warn(title:string,message?:string){
    toastr.error(title,message)
  }
  
}
interface UserResponse {
  login: string;
  bio: string;
  company: string;
}