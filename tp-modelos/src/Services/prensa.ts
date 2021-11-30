import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { helper_services } from './helper';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class prensa_services {

  constructor(private http:HttpClient, private helperServices:helper_services) { }
  private url:string = environment.api_gateway;
  
  public async ObtenerPrensa(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}ObtenerPrensa/${id}`,this.helperServices.header_peticiones())
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

  public async ObtenerPrensaBulto(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}ObtenerPrensaBulto/${id}`,this.helperServices.header_peticiones())
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

  public async EncenderPrensa(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.put(`${this.url}EncenderPrensa/${id}`,this.helperServices.header_peticiones())
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

  public async ApagarPrensa(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.put(`${this.url}ApagarPrensa/${id}`,this.helperServices.header_peticiones())
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

  public async AgregarBultoAPrensa(bulto:number,brazo:number,prensa:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.post(`${this.url}AgregarBultoAPrensa/${bulto}/${brazo}/${prensa}`,this.helperServices.header_peticiones())
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
