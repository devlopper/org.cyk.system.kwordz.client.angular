import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';
import { HttpClient } from '@angular/common/http';

class DataTablesResponse {
  data: any = [];
  draw: number = 0;
  recordsFiltered: number = 0;
  recordsTotal: number = 0;
  start : number = 0;
  length : number = 3;
}

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit {

  dataTableOptions : DataTables.Settings = {};
  files : any = [];

  dtOptions: DataTables.Settings = {};
  persons: any = [];

  constructor(private http: HttpClient,private service: FileService) { }

  ngOnInit(): void {   
    const that = this;

    this.dataTableOptions = {
      pagingType: 'full_numbers',
      //pageLength: 3,
      serverSide: true,
      processing: true,
      ajax: (inputs: any, callback) => {
        that.http
          .get(this.service.buildGetUrl(inputs.start,inputs.length,inputs.search.value), {observe: 'response'}).subscribe(response => {
            const x_total_count = response.headers.get("x-total-count");
            that.files = response.body;
            callback({
              recordsTotal: x_total_count,
              recordsFiltered: x_total_count,
              data: []
            });
          });
      },
      columns: [{ data: 'nameAndExtension' }]
    };
  }
}