import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Jugador } from '../../../class/jugador';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
  // @Input() listado:Jugador;
  // @Input() titulo:string;
  listado:Jugador;
  titulo="tabla de los grosos!!!!!";
  constructor() { }

  ngOnInit(): void {
    // console.log(this.listado);
        this.listado=new Jugador("juan",600);
  }

}
