import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { helper_services } from './helper';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class pila_services {

  constructor(private http:HttpClient, private helperServices:helper_services) { }
  private url:string = environment.api_gateway;
  
  public async AgregarBultoAPila(){
    return await new Promise<any>((resolve, reject) => {
        this.http.post(`${this.url}AgregarBultoAPila`,this.helperServices.header_peticiones())
          .subscribe((res: any) => {
            if (res.statusCode != 200) {
              reject(res);              
            }          
            resolve(res.data);
  
          }, err => {
            reject(err);
          })
      });
  }

  public async obtenerPila(){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}ObtenerPila`,this.helperServices.header_peticiones())
          .subscribe((res: any) => {
            if (res.statusCode != 200) {
              reject(res);              
            }          
            resolve(res.data);
  
          }, err => {
            reject(err);
          })
      });
  }

  
}
