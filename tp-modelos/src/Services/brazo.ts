import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { helper_services } from './helper';
import { BehaviorSubject, Subject } from 'rxjs';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class brazo_services {

  constructor(private http:HttpClient, private helperServices:helper_services) { }
  private url:string = environment.api_gateway;
  public observerBrazo: Subject<number> = new BehaviorSubject<number>(0);
  
  public async ObtenerBrazo(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}ObtenerBrazo/${id}`,this.helperServices.header_peticiones())
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

  public async ObtenerBrazoBulto(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}ObtenerBrazoBulto/${id}`,this.helperServices.header_peticiones())
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

  public async EncenderBrazo(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.put(`${this.url}EncenderBrazo/${id}`,this.helperServices.header_peticiones())
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

  public async ApagarBrazo(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.put(`${this.url}ApagarBrazo/${id}`,this.helperServices.header_peticiones())
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

  public async AgregarBultoABrazo(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.post(`${this.url}AgregarBultoABrazo/${id}`,this.helperServices.header_peticiones())
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
