import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export interface File {
  identifier : string;
  name : string;
  nameAndExtension : string;
}

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  get(): Observable<File> {
    //const url = 'https://my-json-server.typicode.com/devlopper/org.cyk.system.kwordz.client.angular/files';
    const url = 'http://devkoms.com:9001/api/open/file/get';
    return this.http.get<File>(url);
  }
}