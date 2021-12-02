import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { pila_services } from 'src/Services/pila';
import { prensa_services } from 'src/Services/prensa';

@Component({
  selector: 'app-pila',
  templateUrl: './pila.component.html',
  styleUrls: ['./pila.component.scss']
})
export class PilaComponent implements OnInit {

  constructor(private servicesPila:pila_services, private prensaService: prensa_services) { }

  public suscripcionPrensa!: Subscription

  public cantPila:number = 0;

  async ngOnInit() {

    await this.ObtenerPila();

    this.suscripcionPrensa = await this.prensaService.observerPrensa.subscribe(async (res: any) =>{
      
     if (res == true){
      

        await this.ObtenerPila();
     
       
     }
   })
  
  }


  public async ObtenerPila(){
    await this.servicesPila.obtenerPila().then((res:any)=>{
      
        this.cantPila = res.length;
    })
  }
}
