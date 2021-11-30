import { Component, OnInit } from '@angular/core';
import { cinta_services } from 'src/Services/cinta';

@Component({
  selector: 'app-cinta',
  templateUrl: './cinta.component.html',
  styleUrls: ['./cinta.component.scss']
})
export class CintaComponent implements OnInit {

  constructor(private cintaService:cinta_services) { }

  public estado:boolean = false;

  public async ngOnInit() {
    await this.cintaService.obtenerCinta(1).then((res:any)=>{
      this.estado = res.encendido;    
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

}
