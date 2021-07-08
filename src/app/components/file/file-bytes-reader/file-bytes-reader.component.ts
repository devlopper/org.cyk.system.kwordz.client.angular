import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-file-bytes-reader',
  templateUrl: './file-bytes-reader.component.html',
  styleUrls: ['./file-bytes-reader.component.scss']
})
export class FileBytesReaderComponent implements OnInit {

  url:any = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = "http://devkoms.com:9001/api/open/file/"+this.route.snapshot.paramMap.get('id')+"/download?isinline=true";
    //this.route.snapshot.paramMap.get('id');
  }

  getDownloadUrl() : string {
    //this.identifier = this.route.snapshot.paramMap.get('id');
    return '';
  }

}