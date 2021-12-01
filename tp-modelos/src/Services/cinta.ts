import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from 'src/environments/environment';
import { helper_services } from './helper';

@Injectable(
    {
        providedIn: 'root'
    }
)
export class cinta_services {

  constructor(private http:HttpClient, private helperServices:helper_services) { }
  private url:string = environment.api_gateway;
  
  public async obtenerCinta(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}obtenercinta/${id}`,this.helperServices.header_peticiones())
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

  public async prenderCinta(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.put(`${this.url}encenderCinta/${id}`,this.helperServices.header_peticiones())
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

  public async apagarCinta(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.put(`${this.url}apagarCinta/${id}`,this.helperServices.header_peticiones())
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

  public async ObtenerCintaBulto(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}ObtenerCintaBulto/${id}`,this.helperServices.header_peticiones())
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

  public async AgregarBultoACinta(bulto:number,id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.post(`${this.url}AgregarBultoACinta/${bulto}/${id}`,this.helperServices.header_peticiones())
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


  public async ObtenerCintaBultosActivos(){
    return await new Promise<any>((resolve, reject) => {
        this.http.get(`${this.url}ObtenerCintaBultosActivos`,this.helperServices.header_peticiones())
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
  
  public async agregarBultoACinta(id:number){
    return await new Promise<any>((resolve, reject) => {
        this.http.post(`${this.url}agregarBultoACinta/${id}`,this.helperServices.header_peticiones())
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
