import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

const SERVER_URI = 'http://devkoms.com:9001/api/';
const APIs_LOCATION = SERVER_URI+'open/file/';

export interface File {
  identifier : string;
  name : string;
  nameAndExtension : string;
  mimeType : string;
  size : string;
  downloadLink:any;
}

@Injectable({
  providedIn: 'root'
})
export class FileService {

  constructor(private http: HttpClient) { }

  buildGetUrl(from:any,count:any,query:string) : string {
    return APIs_LOCATION+'get?countable=true&from='+from+'&count='+count+'&filterstring='+(query||'')
  }

  buildDownloadUrlFromLink(link:string) : string {
    return SERVER_URI+link;
  }
}