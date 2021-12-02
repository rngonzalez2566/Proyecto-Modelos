import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { brazo_services } from 'src/Services/brazo';
import { bulto_services } from 'src/Services/bulto';
import { cinta_services } from 'src/Services/cinta';
import { prensa_services } from 'src/Services/prensa';

@Component({
  selector: 'app-brazo',
  templateUrl: './brazo.component.html',
  styleUrls: ['./brazo.component.scss']
})
export class BrazoComponent implements OnInit {

  constructor(private brazoService:brazo_services, private prensaService: prensa_services, private bultoService: bulto_services, private cintaService: cinta_services) { }

  public estado:boolean = false;
  public suscripcionBrazo!: Subscription;
  public suscripcionPrensa!: Subscription;
  public estadoBrazo:number = 0;

  public async ngOnInit() {
     await this.brazoService.ObtenerBrazo(1).then((res:any)=>{
       this.estado = res.encendido;    
     })

     this.suscripcionBrazo = await this.brazoService.observerBrazo.subscribe((res: any) =>{
      if (res > 0){
          this.AgregarBultoABrazo().then(async () =>{
            this.bultoService.cambioBultos.next(true);
            this.ObtenerBrazoBulto();
          })       
      }
    })
    
    this.suscripcionPrensa = await this.prensaService.observerPrensa.subscribe((res: any) => {
      if (res==true){
        this.estadoBrazo = 1;
      }else{
        this.estadoBrazo = 0;
      }
    })
    
  }

  public async prenderBrazo(){
    await this.brazoService.EncenderBrazo(1).then((res:any)=>{
      this.estado = true;
      this.cintaService.observerBotonPasar.next(true);    
    })
  }

  public async apagarBrazo(){
    await this.brazoService.ApagarBrazo(1).then((res:any)=>{
      this.estado = false;   
      this.cintaService.observerBotonPasar.next(false); 
    })
  }

  public async AgregarBultoABrazo(){

      await this.brazoService.AgregarBultoABrazo(1).then((res:any)=>{
      this.prensaService.observerPrensa.next(true);
    })
  }

  
  public async ObtenerBrazoBulto(){
    await this.brazoService.ObtenerBrazo(1).then((res:any)=>{
      if(res.Ocupado == false)
      {
        this.estadoBrazo = 0
      }else { this.estadoBrazo = 1}
      
    })
  }
  
  ChequearEstado(){
    if (this.estadoBrazo == 0){
      var formElement = <HTMLFormElement>document.getElementById('estado1');
      formElement.innerHTML='LIBRE';
      formElement.style.display='flex';

      return 'background-color: white ; height: 200px'
    }
    else{
      var formElement = <HTMLFormElement>document.getElementById('estado1');
      formElement.style.display='flex';
      formElement.innerHTML='OCUPADO';
      return 'background-color: yellow ; height: 200px'
    }
  }
}
