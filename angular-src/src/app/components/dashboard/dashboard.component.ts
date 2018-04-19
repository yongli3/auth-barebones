import { Component, OnInit } from '@angular/core';
import { Record } from './record';
import { RecordsService } from '../../services/records.service';
import { FlashMessagesService } from 'angular2-flash-messages';
import { RecordComponent } from '../record/record.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css'],
})
export class DashboardComponent implements OnInit {
  records: any[];
  selectedRecord: Record;

  constructor(private recordsService: RecordsService, private flashMessage: FlashMessagesService) { }

  ngOnInit() {
    this.getRecords();
  }

  private getRecords(){
    console.log("start to get all records");
    this.recordsService.getRecords().subscribe(data => {
      if(data.success) {
        this.records = data.records;
        for ( var i =0; i < data.records.length; ++i) {
          console.log("description: " + data.records[i].description + " create date: " + data.records[i].createTime);
        }
      }
      else {
        console.log("Failed to get records");
        this.flashMessage.show("failed to get records" + data.msg, {
          cssClass: 'alert-danger',
          timeout: 3000});
      }
    });
  }
}
