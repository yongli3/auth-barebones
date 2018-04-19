import { Component, OnInit, Input, Output } from '@angular/core';
import { Record } from '../dashboard/record';
import { InputEditorModule } from 'angular-inline-editors';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() record: Record;
  
  constructor() { }

  ngOnInit() {
  }

  saveRecord() {
    console.log("saveRecordDescription");
    //this.record.description = this.description;
    //this.record.updateTime = Date.now();
  }

}
