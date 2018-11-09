import { Component, OnInit, ElementRef, ViewChild} from '@angular/core';
declare var $: any;
@Component({
  selector: 'app-primary',
  templateUrl: './primary.component.html',
  styleUrls: ['./primary.component.css']
})
export class PrimaryComponent implements OnInit {
  @ViewChild('openModal') openModal:ElementRef;
  constructor() { }

  ngOnInit() {
    // this.openModal.nativeElement.click();
  }
  // func(){
  //   debugger
  //   alert("test")
  //   $('#myModal').modal('show');
  // }

}
