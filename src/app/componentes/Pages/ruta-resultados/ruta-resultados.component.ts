import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { Jugador } from 'src/app/class/jugador';

@Component({
  selector: 'app-ruta-resultados',
  templateUrl: './ruta-resultados.component.html',
  styleUrls: ['./ruta-resultados.component.css']
})
export class RutaResultadosComponent implements OnInit {

  @Output() lista= new EventEmitter<Jugador>();
  // jug:Jugador[];
  j:Jugador;
  Tablagrosos:string="Tabla de los Grosos !!!!";

  constructor() {
    this.j=new Jugador("Juan",500);
    // this.jug.push(this.J);
    this.lista.emit(this.j);
    
   }

  ngOnInit(): void {
    console.log(this.j);
  }


}
