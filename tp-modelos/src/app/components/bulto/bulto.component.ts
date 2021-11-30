import { Component, OnInit } from '@angular/core';
import { bulto_services } from 'src/Services/bulto';

@Component({
  selector: 'app-bulto',
  templateUrl: './bulto.component.html',
  styleUrls: ['./bulto.component.scss']
})
export class BultoComponent implements OnInit {

  constructor(private bultoServices:bulto_services) { }

  public bultos:number = 0;

  public async ngOnInit() {
    await this.obtenerbultos();
    
  }

  public async crearBulto(){
    let body = {
      "estado" : false
    }
    await this.bultoServices.CrearBulto(body).then((res:any)=>{
         this.obtenerbultos();
    })
  }

  public async obtenerbultos() {
    await this.bultoServices.ObtenerTodosLosBultos().then((res:any)=>{
      this.bultos = res.length  
    })
  }

  public async eliminarBulto(){

    await this.bultoServices.EliminarBulto().then((res:any)=>{
         this.obtenerbultos();
    })
  }
 
}
