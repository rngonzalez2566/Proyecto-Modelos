import { Component, OnInit } from '@angular/core';
import { prensa_services } from 'src/Services/prensa';

@Component({
  selector: 'app-prensa',
  templateUrl: './prensa.component.html',
  styleUrls: ['./prensa.component.scss']
})
export class PrensaComponent implements OnInit {

  constructor(private prensaService:prensa_services) { }

  public estado:boolean = false;

  public async ngOnInit() {
    await this.prensaService.ObtenerPrensa(1).then((res:any)=>{
      this.estado = res.encendido;    
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

}
