import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

//export const FILE_GET_URL = 'http://devkoms.com:9001/api/open/file/get';

const APIs_LOCATION = 'http://devkoms.com:9001/api/open/file/';

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
    return APIs_LOCATION+'get?countable=true&from='+from+'&count='+count+'&filterstring='+(query||'')
  }

  buildDownloadUrl(identifier:any) : string {
    return APIs_LOCATION+identifier+'/download?isinline=true';
  }
}