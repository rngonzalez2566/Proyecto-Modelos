import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { cinta_services } from 'src/Services/cinta';
import { pila_services } from 'src/Services/pila';
import { prensa_services } from 'src/Services/prensa';

@Component({
  selector: 'app-prensa',
  templateUrl: './prensa.component.html',
  styleUrls: ['./prensa.component.scss']
})
export class PrensaComponent implements OnInit {

  constructor(private prensaService:prensa_services, private pilaService: pila_services, private cintaService: cinta_services) { }

  public estado:boolean = false;
  public suscripcionPrensa!: Subscription;
  public estadoPrensa:number = 0;

  public async ngOnInit() {
    await this.prensaService.ObtenerPrensa(1).then((res:any)=>{
      this.estado = res.encendido;    
    })

    this.suscripcionPrensa = await this.prensaService.observerPrensa.subscribe((res: any) =>{
      if (res == true){

          this.AgregarBultoAPrensa().then(async () =>{
            this.estadoPrensa = 1;
            this.pilaService.AgregarBultoAPila().then(() => {
             this.prensaService.observerPrensa.next(false);
             this.estadoPrensa = 0;
             //this.obtenerPrensa();
            });
          })      
     }
   })

  }

  public async prenderPrensa(){
    await this.prensaService.EncenderPrensa(1).then((res:any)=>{
      this.estado = true;
      this.cintaService.observerBotonPasar.next(true);    
    })
  }

  public async apagarPrensa(){
    await this.prensaService.ApagarPrensa(1).then((res:any)=>{
      this.estado = false;    
      this.cintaService.observerBotonPasar.next(false);
    })
  }

  public async AgregarBultoAPrensa(){

      await this.prensaService.AgregarBultoAPrensa(1,1).then((res:any)=>{
      
      })
  }

  public async obtenerPrensa(){
    await this.prensaService.ObtenerPrensa(1).then((res:any)=>{
      if(res.Ocupado == false)
      {
        this.estadoPrensa = 0
      }else { this.estadoPrensa = 1}
      
    })
  }

  ChequearEstado(){
    if (this.estadoPrensa == 0){
      var formElement = <HTMLFormElement>document.getElementById('estado');
      formElement.innerHTML='LIBRE';
      formElement.style.display='flex';

      return 'background-color: white ; height: 200px'
    }
    else{
      var formElement = <HTMLFormElement>document.getElementById('estado');
      formElement.style.display='flex';
      formElement.innerHTML='OCUPADO';
      return 'background-color: yellow ; height: 200px'
    }
  }
  

}
