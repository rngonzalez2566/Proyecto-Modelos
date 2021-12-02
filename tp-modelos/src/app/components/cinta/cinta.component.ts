import { Component, OnInit } from '@angular/core';
import { cinta_services } from 'src/Services/cinta';
import { bulto_services } from 'src/Services/bulto';
import { brazo_services } from 'src/Services/brazo';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-cinta',
  templateUrl: './cinta.component.html',
  styleUrls: ['./cinta.component.scss']
})
export class CintaComponent implements OnInit {

  constructor(private cintaService:cinta_services, private bultoServices:bulto_services, private brazoServices:brazo_services) { }

  public estado:boolean = false;
  public bultosCinta:number = 0;
  public suscripcionBultos!: Subscription

  public async ngOnInit() {
    await this.cintaService.obtenerCinta(1).then((res:any)=>{
      this.estado = res.encendido;    
    })
    this.obtenerbultos();

    this.suscripcionBultos = await this.bultoServices.cambioBultos.subscribe((res: any) =>{
      if (res == true){
        this.obtenerbultos().then(async () =>{
          await this.bultoServices.cambioBultos.next(false);
        })
      }
    })


  }

  public async prenderCinta(){
    await this.cintaService.prenderCinta(1).then((res:any)=>{
      this.estado = true;    
    })
  }

  public async apagarCinta(){
    await this.cintaService.apagarCinta(1).then((res:any)=>{
      this.estado = false;    
    })
  }

  public async agregarBultoACinta(){
    await this.cintaService.agregarBultoACinta(1).then((res:any)=>{
      this.bultoServices.cambioBultos.next(true);
      this.brazoServices.observerBrazo.next(this.bultosCinta);
    })
    this.obtenerbultos();
  }

  public async obtenerbultos() {
    await this.cintaService.ObtenerCintaBultosActivos().then((res:any)=>{
      this.bultosCinta = res.length 
      this.brazoServices.observerBrazo.next(this.bultosCinta);
    })
  }

  
}
