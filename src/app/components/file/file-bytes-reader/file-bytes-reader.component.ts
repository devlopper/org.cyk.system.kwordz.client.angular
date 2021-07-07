import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-file-bytes-reader',
  templateUrl: './file-bytes-reader.component.html',
  styleUrls: ['./file-bytes-reader.component.scss']
})
export class FileBytesReaderComponent implements OnInit {

  identifier:string = "";

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    
  }

  getDownloadUrl() : string {
    //this.identifier = this.route.snapshot.paramMap.get('id');
    return '';
  }

}