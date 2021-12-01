import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { helper_services } from './helper';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class bulto_services {

  
  constructor(private http:HttpClient, private helperServices:helper_services) { }
  
  private url:string = environment.api_gateway;
  public bultos:number = 0;
  
  public async ObtenerBulto(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}ObtenerBulto/${id}`,this.helperServices.header_peticiones())
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

  public async CrearBulto(body:any){
    return await new Promise<any>((resolve, reject) => {
        this.http.post(`${this.url}CrearBulto`,body,this.helperServices.header_peticiones())
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

  public async ObtenerTodosLosBultos(){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}ObtenerTodosLosBultos`,this.helperServices.header_peticiones())
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

  public async EliminarBulto(){
    return await new Promise<any>((resolve, reject) => {
        this.http.put(`${this.url}EliminarBulto`,this.helperServices.header_peticiones())
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
