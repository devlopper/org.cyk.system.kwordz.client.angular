import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file/file.service';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-files',
  templateUrl: './list.component.html',
  styleUrls: ['./list.component.scss']
})
export class ListComponent implements OnInit {

  files : any = [];

  constructor(private service: FileService,private http: HttpClient) { }

  ngOnInit(): void {
    this.service.files().subscribe(
      (response)=>{
        this.files = response;
      }
    );
  }
}