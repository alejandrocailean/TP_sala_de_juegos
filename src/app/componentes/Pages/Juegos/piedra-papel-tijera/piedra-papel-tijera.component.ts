import { Component, OnInit } from '@angular/core';
import { MostrarMensajeService } from 'src/app/Servicios/MostrarMensaje/MostrarMensaje.service';
import {PiedraPapelTijera} from '../../../../class/piedra-papel-tijera';

@Component({
  selector: 'app-piedra-papel-tijera',
  templateUrl: './piedra-papel-tijera.component.html',
  styleUrls: ['./piedra-papel-tijera.component.css','../../../../app.component.css']
})
export class PiedraPapelTijeraComponent implements OnInit {

  
  jugador:PiedraPapelTijera;
  Mensajes:string;  
  disabledRadio:boolean;
  rutaGuerrero:string;
  rutaComputadora:string;
  

  constructor(private mensaje:MostrarMensajeService) { 
    this.jugador=new PiedraPapelTijera;
    this.disabledRadio=false;
  }

  ngOnInit(): void {
  }

  guerrero(jug:string){
    if (jug==="papel") {
      this.jugador.guerrero="papel";
      this.rutaGuerrero=this.jugador.papel;  
    }
    if (jug==="tijera") {
      this.jugador.guerrero="tijera";
      this.rutaGuerrero=this.jugador.tijera
    }
    if (jug==="piedra") {
      this.jugador.guerrero="piedra";
      this.rutaGuerrero=this.jugador.piedra;
    }
    this.computadora();
  }

  computadora(){
    this.jugador.computadora=this.jugador.opciones[Math.floor(Math.random()*this.jugador.opciones.length)];
    if (this.jugador.computadora==="papel") {
      this.rutaComputadora=this.jugador.papel;     
    }
    if (this.jugador.computadora==="tijera") {
      this.rutaComputadora=this.jugador.tijera;
    }
    if (this.jugador.computadora==="piedra"){
      this.rutaComputadora=this.jugador.piedra;
    }

    this.disabledRadio=true;
    
  }
  jugar(){
    console.log(this.jugador.computadora);
    console.log(this.jugador.guerrero);
    if (this.jugador.computadora===this.jugador.guerrero) {
     this.Mensajes= this.mensaje.MostrarMensaje(this.jugador.mensaje_empate,false); 
      console.log(this.jugador.mensaje_empate);     
    }

    //jugador humano piedra
    if (this.jugador.guerrero==="piedra" && this.jugador.computadora==="papel"  ) {     
        this.Mensajes= this.mensaje.MostrarMensaje(this.jugador.mensaje_perdedor,false);
        console.log(this.jugador.mensaje_perdedor);
    }
    if (this.jugador.guerrero==="piedra" && this.jugador.computadora==="tijera") {
      this.Mensajes= this.mensaje.MostrarMensaje(this.jugador.mensaje_ganador,true);
      console.log(this.jugador.mensaje_ganador);
    }
    //fin bloque

    //jugador humano papel
    if (this.jugador.guerrero==="papel" && this.jugador.computadora==="piedra") {      
      this.Mensajes=this.mensaje.MostrarMensaje(this.jugador.mensaje_ganador,true);
      console.log(this.jugador.mensaje_ganador);
    }    
    if (this.jugador.guerrero==="papel" && this.jugador.computadora==="tijera") {
      this.Mensajes=this.mensaje.MostrarMensaje(this.jugador.mensaje_perdedor,false);
      console.log(this.jugador.mensaje_perdedor);
    }
    //fin bloque
    
    //jugador humano tijera
    if (this.jugador.guerrero==="tijera" && this.jugador.computadora==="papel") {      
      this.Mensajes=this.mensaje.MostrarMensaje(this.jugador.mensaje_ganador,true);
      console.log(this.jugador.mensaje_ganador);
    }
    if (this.jugador.guerrero==="tijera" && this.jugador.computadora==="piedra") {
        this.Mensajes=this.mensaje.MostrarMensaje(this.jugador.mensaje_perdedor,false);
        console.log(this.jugador.mensaje_perdedor);
    }
    //fin bloque

    //resetear juego
    this.disabledRadio=false;
    this.rutaComputadora="";
    this.rutaGuerrero="";
    this.jugador.guerrero="";
    this.jugador.computadora="";  
  }

}
