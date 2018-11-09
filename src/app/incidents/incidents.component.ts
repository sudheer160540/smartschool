import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { CookieService } from 'angular2-cookie/core';
import { DepartmentService } from '../../services/department.service';
import { MouseEvent } from '@agm/core';
declare var $: any;
@Component({
  selector: 'app-incidents',
  templateUrl: './incidents.component.html',
  styleUrls: ['./incidents.component.css']
})
export class IncidentsComponent implements OnInit {
  Data: any = []
  status: any = {};
  report: any = {}
  history = ''
  zoom: number = 8;
  mapdata: any;
  lat: number = 12.9716; lng: number = 77.5946;
  lat1: number;
  iconUrl: any;
  lng1: number;
  markers: any = []
  dateI: any
  connect: boolean = false;
  Priority: any = '';
  Status: any = '';
  private data: any = [];
  goodResponse: any = []
  projects: any = {}
  loginResponse1: boolean;
  showdata: boolean;
  public sortBy = 'dateAnadTime';
  public sortOrder = "asc";
  public incidentUpdate = {
    incidentDetailsList: []
  }
  // array of currently selected entities in the data table
  selectedEntities: any[];

  // function to handle data/entities selected/deselected in the table 
  public setSelectedEntities($event: any) {
    this.selectedEntities = $event;
  }
  constructor(private cookieService: CookieService, private GS: DepartmentService) {
    // setInterval(() => { this.getIncidentLog(); }, 5000)
  }
  mapClicked($event: MouseEvent) {
    console.log($event)
    this.markers.push({
      lat: $event.coords.lat,
      lng: $event.coords.lng,
      draggable: true
    });
  }


  ngOnInit() {
    this.getIncidentLog();
    // this.onload();
    this.getAlldata()
  }
  showMaps(maps) {
    debugger;
    var filterData = maps.filter(function (task) {
      //  console.log("task"+JSON.stringify(task))
      return task.incidentDetails;
    });
    
    console.log('........................', filterData);
    this.lat = filterData[0].latitude;
    this.lng = filterData[0].longitude
    this.Data = filterData;
   
    // alert(JSON.stringify(this.Data))

    //this.data=filterData;
  }
  getAlldata() {
    const loginData: any = this.cookieService.getObject('LoginResponse');
    this.GS.getAllIncidentLogs1(loginData.type).subscribe(data => {
      this.showMaps(data);
    })
  }

  click() {
    this.GS.getIncidentLogs(this.dateI).subscribe(data1 => {
      if (data1) {
        this.data = data1;
        // this.Status = "Open"
      } else {
        alert('There is no available data on' + this.dateI)
      }
    }), error => {
      alert('There is no available data on' + this.dateI)
    }
  }
  showData(showdata) {
    var filterData = showdata.filter(function (task) {
      //  console.log("task"+JSON.stringify(task))
      return task.incidentDetails;
    });
    this.data = filterData;
  }
  getIncidentLog() {

    const loginData: any = this.cookieService.getObject('LoginResponse');
    this.GS.getAllIncidentLogs(loginData.type).subscribe(data1 => {

      this.showData(data1)
      // this.data = data1;
      
    })
  }
  changedate() {
    // alert("e")
  }
  datahistory(history) {
    const loginData: any = this.cookieService.getObject('LoginResponse');
    this.GS.getAllIncidentH(loginData.type, history).subscribe(data1 => {

      this.data = data1;
    })
  }
  delete(i) {
    this.GS.DeleteLog(i).subscribe(data => {
      this.getIncidentLog();
    })
  }
  updateDate(resdata) {

  
    var status = false;
    for (var i = 0; i < resdata.incidentDetailsList.length; i++) {
      if (resdata.incidentDetailsList[i].status == 'open') {

        status = true;
      }
    }

    if (!status) {
      this.GS.patchIncidentStatus({ "id": resdata.id, status: 'completed' }).subscribe(data1 => {
       
      })
    } else {
      console.log("not compleated");
    }
  }
  updateIncidentStatus(data) {


    this.GS.getRecordsFromIncident(data).subscribe(resdata => {
      //resdata.incidentDetailsList;
      this.updateDate(resdata)
      this.report= '';
      // console.log("resdata"+JSON.stringify(resdata.latitude));
      //console.log(resp.incidentDetailsList);
    });
  }
  changeStatus(p, e, r) {
    var data = {
      osmStatus: "false",
      status: e,
      id: p.incidentDetails.id,
      report: r,
      updatedDate:new Date()
    };
    this.GS.getIncidentLogsbyId(data).subscribe(data => {
      this.getIncidentLog();
      this.updateIncidentStatus(p)
      this.GS.success("Successfully updated");
    }, error => {
      this.GS.warn("error while updating")
    })



  }
}
