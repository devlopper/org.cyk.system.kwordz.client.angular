import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FileService {

  private data:any = [];

  constructor(private http: HttpClient) { }

  files(): Observable<any[]> {
    //console.log(this.http.get('https://my-json-server.typicode.com/devlopper/org.cyk.system.kwordz.client.angular/files'));
    //return "Service has been called";
    
    //return this.http.get('https://my-json-server.typicode.com/devlopper/org.cyk.system.kwordz.client.angular/files');
    const url = 'https://my-json-server.typicode.com/devlopper/org.cyk.system.kwordz.client.angular/files';
    /*
    this.http.get(url).subscribe((response)=>{
      this.data = response
    });
    */
    return this.http.get<any[]>(url);
  }
}