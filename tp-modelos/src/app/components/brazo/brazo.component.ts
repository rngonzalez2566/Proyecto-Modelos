import { Component, OnInit } from '@angular/core';
import { brazo_services } from 'src/Services/brazo';

@Component({
  selector: 'app-brazo',
  templateUrl: './brazo.component.html',
  styleUrls: ['./brazo.component.scss']
})
export class BrazoComponent implements OnInit {

  constructor(private brazoService:brazo_services) { }

  public estado:boolean = false;

  public async ngOnInit() {
     await this.brazoService.ObtenerBrazo(1).then((res:any)=>{
       this.estado = res.encendido;    
     })
  }

  public async prenderBrazo(){
    await this.brazoService.EncenderBrazo(1).then((res:any)=>{
      this.estado = true;    
    })
  }

  public async apagarBrazo(){
    await this.brazoService.ApagarBrazo(1).then((res:any)=>{
      this.estado = false;    
    })
  }

}
