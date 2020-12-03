import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/Servicios/firestore/firestore.service';
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
  fofo;
  email=localStorage.getItem('email');

  constructor(private mensaje:MostrarMensajeService,private firestore:FirestoreService,private afs:AngularFirestore) { 
    this.jugador=new PiedraPapelTijera;
    this.disabledRadio=false;
  }

  ngOnInit(): void {
    this.firestore.getDato('users_score',this.email).subscribe(data=>{


      this.fofo=data.payload.data();
      console.log(this.fofo.puntaje)
    }
      );
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
      this.fofo.puntaje+=50;
      this.afs.collection('users_score').doc(this.email).set({email:this.email,puntaje:this.fofo.puntaje})
    }
    //fin bloque

    //jugador humano papel
    if (this.jugador.guerrero==="papel" && this.jugador.computadora==="piedra") {      
      this.Mensajes=this.mensaje.MostrarMensaje(this.jugador.mensaje_ganador,true);
      console.log(this.jugador.mensaje_ganador);
      this.fofo.puntaje+=50;
      this.afs.collection('users_score').doc(this.email).set({email:this.email,puntaje:this.fofo.puntaje})
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
      this.fofo.puntaje+=50;
      this.afs.collection('users_score').doc(this.email).set({email:this.email,puntaje:this.fofo.puntaje})
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
