import { Component, OnInit } from '@angular/core';
import { MostrarMensajeService } from 'src/app/Servicios/MostrarMensaje/MostrarMensaje.service';
import {AgilidadAritmetica } from '../../../../class/agilidad-aritmetica';

@Component({
  selector: 'app-agilidad-aritmetica',
  templateUrl: './agilidad-aritmetica.component.html',
  styleUrls: ['./agilidad-aritmetica.component.css','../../../../app.component.css']
})
export class AgilidadAritmeticaComponent implements OnInit {

  jugador:AgilidadAritmetica;
  h_input:boolean;
  resultado:number;
  Mensajes:string;

  constructor(private mensaje:MostrarMensajeService) { 
    this.jugador=new AgilidadAritmetica;
    this.h_input=true;
  }

  ngOnInit(): void {
  }
  
  jugar(){
    this.jugador.numero1=this.generarNumero();
    this.jugador.numero2=this.generarNumero();
    this.jugador.numero3=this.generarNumero();
    this.jugador.numero4=this.generarNumero();
    this.h_input=false
  }

  generarNumero(min:number=100,max:number=1):number{
    return Math.floor(Math.random() * (max - min + 1) + min);
  }

  calcular(){
    this.jugador.resultado=((this.jugador.numero1*this.jugador.numero2)+this.jugador.numero3)/this.jugador.numero4;
    if (this.resultado==this.jugador.resultado) {
      this.Mensajes=this.mensaje.MostrarMensaje("ACERTASTES, SOS EINSTEIN!!",true);
      this.h_input=true;
    }else{
      this.Mensajes=this.mensaje.MostrarMensaje("LE PIFIASTES EL RESULTADO ES:"+this.jugador.resultado,false)
    }
  }

}
