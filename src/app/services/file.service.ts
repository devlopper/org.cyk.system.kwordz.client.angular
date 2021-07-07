import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//export const FILE_GET_URL = 'http://devkoms.com:9001/api/open/file/get';

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

  buildGetUrl(from:any,count:any,query:any) : string {
    const url = 'http://devkoms.com:9001/api/open/file/get';
    return url+'?countable=true&from='+from+'&count='+count+'&filterstring='+(query||'')
  }

  get(filterAsString:string,first:number,count:number): Observable<File> {
    //const url = 'https://my-json-server.typicode.com/devlopper/org.cyk.system.kwordz.client.angular/files';
    const url = 'http://devkoms.com:9001/api/open/file/get';
    return this.http.get<File>(url);
  }  
}