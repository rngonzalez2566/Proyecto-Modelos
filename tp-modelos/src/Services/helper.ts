import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from 'src/environments/environment';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class helper_services {

  constructor(private http:HttpClient) { }
  private header:any;
  public header_peticiones(){
      let opcionesHttp = {
          headers: new HttpHeaders({
            'Content-Type': 'application/json'
          })
      };
      this.header = opcionesHttp;
      return this.header;
  }
 
}
