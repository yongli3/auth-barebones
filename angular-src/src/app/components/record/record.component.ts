import { Component, OnInit, Input, Output } from '@angular/core';
import { Record } from '../dashboard/record';
import { InputEditorModule } from 'angular-inline-editors';
import { RecordsService } from '../../services/records.service';

@Component({
  selector: 'app-record',
  templateUrl: './record.component.html',
  styleUrls: ['./record.component.css']
})
export class RecordComponent implements OnInit {
  @Input() record: Record;
  
  constructor(private recordsService: RecordsService) { }

  ngOnInit() {
  }

  saveRecord() {
    this.recordsService.updateRecord(this.record).subscribe(data => {
    if(data.success) {
      console.log("update success");
    }
    else {
      console.log("update failed");
    }
    });
  }

}
