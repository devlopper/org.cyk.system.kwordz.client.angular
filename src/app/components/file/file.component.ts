import { Component, OnInit } from '@angular/core';
import { FileService } from '../../services/file/file.service';

@Component({
  selector: 'app-file',
  templateUrl: './file.component.html',
  styleUrls: ['./file.component.scss']
})
export class FileComponent implements OnInit {

  allFiles: any = [];

  constructor(private fileService: FileService) { }

  ngOnInit(): void {
    this.files();
  }

  files(): void {
    this.fileService
        .files()
        .subscribe((response: any) => {
          this.allFiles = response.data;
        });
  }

}