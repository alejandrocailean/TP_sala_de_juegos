import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/Servicios/firestore/firestore.service';
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
  fofo;
  email=localStorage.getItem('email');

  constructor(private mensaje:MostrarMensajeService,private firestore:FirestoreService,private afs:AngularFirestore) { 
    this.jugador=new AgilidadAritmetica;
    this.h_input=true;
  }

  ngOnInit(): void {
    this.firestore.getDato('users_score',this.email).subscribe(data=>{


      this.fofo=data.payload.data();
      console.log(this.fofo.puntaje)
    }
      );
  }
  
  jugar(){
    this.jugador.numero1=this.generarNumero();
    this.jugador.numero2=this.generarNumero();
    this.jugador.numero3=this.generarNumero();
    this.jugador.numero4=this.generarNumero();
    this.h_input=false
    this.jugador.resultado=((this.jugador.numero1*this.jugador.numero2)+this.jugador.numero3)/this.jugador.numero4;
    console.log(this.jugador.resultado);
  }

  generarNumero(min:number=100,max:number=1):number{
    return Math.floor(Math.random() * (max - min + 1) + min);
    
  }

  calcular(){
    
    if (this.resultado==this.jugador.resultado) {
      this.Mensajes=this.mensaje.MostrarMensaje("ACERTASTES, SOS EINSTEIN!!",true);
      this.h_input=true;
      this.fofo.puntaje+=50;
      this.afs.collection('users_score').doc(this.email).set({email:this.email,puntaje:this.fofo.puntaje})
    }else{
      this.Mensajes=this.mensaje.MostrarMensaje("LE PIFIASTES EL RESULTADO ES:"+this.jugador.resultado,false)
    }
  }

}
