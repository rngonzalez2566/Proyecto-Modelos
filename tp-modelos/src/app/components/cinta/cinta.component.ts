import { Component, OnInit } from '@angular/core';
import { cinta_services } from 'src/Services/cinta';
import { bulto_services } from 'src/Services/bulto';
import { brazo_services } from 'src/Services/brazo';
import { Subscription } from 'rxjs';
import { prensa_services } from 'src/Services/prensa';

@Component({
  selector: 'app-cinta',
  templateUrl: './cinta.component.html',
  styleUrls: ['./cinta.component.scss']
})
export class CintaComponent implements OnInit {

  constructor(private cintaService:cinta_services, private bultoServices:bulto_services, private brazoServices:brazo_services, private prensaService:prensa_services) { }

  public estado:boolean = false;
  public bultosCinta:number = 0;
  public suscripcionBultos!: Subscription
  public suscripcionBotonPasar!: Subscription
  public estadoBrazo:boolean = false;
  public estadoPrensa:boolean = false;


  public async ngOnInit() {
    
    
    this.obtenerbultos()

    await this.verificarEstados();

  
    this.suscripcionBultos = await this.bultoServices.cambioBultos.subscribe((res: any) =>{
      if (res == true){
        this.obtenerbultos().then(async () =>{
          await this.bultoServices.cambioBultos.next(false);
        })
      }
    })

    this.suscripcionBotonPasar = await this.cintaService.observerBotonPasar.subscribe((res: any) => {
      if (res == true){
        this.verificarEstados();
      }else{
        this.verificarEstados();
      }

    })


  }

  public async verificarEstados(){  

    await this.cintaService.obtenerCinta(1).then((res:any)=>{
      this.estado = res.encendido;    
    })

    await this.prensaService.ObtenerPrensa(1).then((res:any)=>{
      this.estadoPrensa = res.encendido     
    })

    await this.brazoServices.ObtenerBrazo(1).then((res:any)=>{
      this.estadoBrazo = res.encendido     
   })
    
    console.log(this.estado);
    console.log(this.estadoBrazo);
    console.log(this.estadoPrensa);
    
    
    
    if(this.estado && this.estadoBrazo && this.estadoPrensa){
      var element = <HTMLInputElement> document.getElementById("boton");
      element.disabled = false;
    }else{
      var element = <HTMLInputElement> document.getElementById("boton");
      element.disabled = true;
    }   
  }

  public async prenderCinta(){
    await this.cintaService.prenderCinta(1).then((res:any)=>{
      this.estado = true;    
      this.cintaService.observerBotonPasar.next(true);
    })
  }

  public async apagarCinta(){
    await this.cintaService.apagarCinta(1).then((res:any)=>{
      this.estado = false;    
      this.cintaService.observerBotonPasar.next(false);
    })
  }

  public async agregarBultoACinta(){
     
 

      await this.cintaService.agregarBultoACinta(1).then((res:any)=>{
        this.bultoServices.cambioBultos.next(true);
      })
      this.obtenerbultos();
   
  }

  public async obtenerbultos() {
    await this.cintaService.ObtenerCintaBultosActivos().then((res:any)=>{
      this.bultosCinta = res.length 
      this.brazoServices.observerBrazo.next(this.bultosCinta);
    })
  }

  public async obtenerBrazo() {
    await this.brazoServices.ObtenerBrazo(1).then((res:any)=>{
       this.estadoBrazo = res.Encendido     
    })
  }

  public async obtenerPrensa() {
    await this.prensaService.ObtenerPrensa(1).then((res:any)=>{
    
      this.estadoPrensa= res.Encendido     
    })
  }

  
}
