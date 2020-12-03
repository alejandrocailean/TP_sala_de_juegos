import { Component, OnInit, Input } from '@angular/core';
import { from } from 'rxjs';
import { Jugador } from '../../../class/jugador';

@Component({
  selector: 'app-listado',
  templateUrl: './listado.component.html',
  styleUrls: ['./listado.component.css']
})
export class ListadoComponent implements OnInit {
  
   @Input() listado:any[];
  // @Input() titulo:string;
  
  titulo="TABLA DE PUNTAJES";
  constructor() { }

  ngOnInit(): void {
    
       
  }

}
