import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { pila_services } from 'src/Services/pila';
import { prensa_services } from 'src/Services/prensa';

@Component({
  selector: 'app-prensa',
  templateUrl: './prensa.component.html',
  styleUrls: ['./prensa.component.scss']
})
export class PrensaComponent implements OnInit {

  constructor(private prensaService:prensa_services, private pilaService: pila_services) { }

  public estado:boolean = false;
  public suscripcionPrensa!: Subscription;

  public async ngOnInit() {
    await this.prensaService.ObtenerPrensa(1).then((res:any)=>{
      this.estado = res.encendido;    
    })

    this.suscripcionPrensa = await this.prensaService.observerPrensa.subscribe((res: any) =>{
      console.log('OBSERVER PRENSA: ', res);
     if (res == true){
       this.AgregarBultoAPrensa().then(async () =>{
         this.prensaService.observerPrensa.next(false);
         this.pilaService.AgregarBultoAPila();
       })
     }
   })

  }

  public async prenderPrensa(){
    await this.prensaService.EncenderPrensa(1).then((res:any)=>{
      this.estado = true;    
    })
  }

  public async apagarPrensa(){
    await this.prensaService.ApagarPrensa(1).then((res:any)=>{
      this.estado = false;    
    })
  }

  public async AgregarBultoAPrensa(){
    await this.prensaService.AgregarBultoAPrensa(1,1).then((res:any)=>{
      
    })
  }

}
