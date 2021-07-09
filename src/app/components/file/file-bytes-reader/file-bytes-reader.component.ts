import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-file-bytes-reader',
  templateUrl: './file-bytes-reader.component.html',
  styleUrls: ['./file-bytes-reader.component.scss']
})
export class FileBytesReaderComponent implements OnInit {

  url:any = "";

  constructor(private fileService : FileService,private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.url = this.fileService.buildDownloadUrl(this.route.snapshot.paramMap.get('id'));
  }
}