import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { bulto_services } from 'src/Services/bulto';

@Component({
  selector: 'app-bulto',
  templateUrl: './bulto.component.html',
  styleUrls: ['./bulto.component.scss']
})
export class BultoComponent implements OnInit {

  constructor(private bultoServices:bulto_services) { }

  
  public bultos:number = 0;
  public suscripcionBultos!: Subscription;

  public async ngOnInit() {
    await this.obtenerbultos();
    this.suscripcionBultos = await this.bultoServices.cambioBultos.subscribe((res: any) =>{
      if (res == true){
        this.obtenerbultos().then(async () =>{
          await this.bultoServices.cambioBultos.next(false);
        })
      }
    })
    
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
