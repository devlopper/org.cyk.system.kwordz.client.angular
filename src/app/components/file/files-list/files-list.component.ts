import { Component, OnInit } from '@angular/core';
import { FileService } from '../../../services/file.service';

@Component({
  selector: 'app-files-list',
  templateUrl: './files-list.component.html',
  styleUrls: ['./files-list.component.scss']
})
export class FilesListComponent implements OnInit {

  files : any = [];

  constructor(private service: FileService) { }

  ngOnInit(): void {
    this.service.get().subscribe(
      (response)=>{
        this.files = response;
      }
    );
  }
}