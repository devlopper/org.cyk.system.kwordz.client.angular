import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';
//import {viewerType} from 'ngx-doc-viewer/document-viewer.component';
import { FileService } from '../../../services/file.service';
import { DomSanitizer, SafeResourceUrl, SafeUrl} from '@angular/platform-browser';

@Component({
  selector: 'app-file-bytes-reader',
  templateUrl: './file-bytes-reader.component.html',
  styleUrls: ['./file-bytes-reader.component.scss']
})
export class FileBytesReaderComponent implements OnInit {

  public url_safe!: SafeResourceUrl;
  url!:string;
  mime!:string;
  style!:string;

  constructor(private fileService : FileService,private route: ActivatedRoute,private sanitizer: DomSanitizer) { 

  }

  ngOnInit(): void {
    this.url = this.route.snapshot.paramMap.get('url')||'';
    this.url = this.fileService.buildDownloadUrlFromLink(decodeURIComponent(this.url));

    this.url_safe = this.sanitizer.bypassSecurityTrustResourceUrl(this.url);
    
    this.mime = this.route.snapshot.paramMap.get('mime')||'';
    this.mime = decodeURIComponent(this.mime);

    this.style = "width:100%;height:100vh;";
  }
}