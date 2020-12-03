import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/Servicios/firestore/firestore.service';
import { MostrarMensajeService } from 'src/app/Servicios/MostrarMensaje/MostrarMensaje.service';
import {Anagrama}from '../../../../class/anagrama';

@Component({
  selector: 'app-anagrama',
  templateUrl: './anagrama.component.html',
  styleUrls: ['./anagrama.component.css','../../../../app.component.css']
})

export class AnagramaComponent implements OnInit {

  anagrama:Anagrama;
  Mensajes:string;
  h_btn_gen_pal:boolean;
  h_btn_adivina:boolean;
  palabra_sec:string;
  palabra_ing:string;
  fofo;
  email=localStorage.getItem('email');

  constructor(private mensajes:MostrarMensajeService,private firestore:FirestoreService,private afs:AngularFirestore) {
    this.anagrama=new Anagrama;
    this.h_btn_gen_pal=false;
    this.h_btn_adivina=true;
   }

  ngOnInit(): void {
    this.firestore.getDato('users_score',this.email).subscribe(data=>{


      this.fofo=data.payload.data();
      console.log(this.fofo.puntaje)
    }
      );
  }

  palabraAleatoria(){       
    this.anagrama.palabra_secreta=this.anagrama.palabras[Math.floor(Math.random()*this.anagrama.palabras.length)];
    this.palabra_sec=this.anagrama.palabra_secreta;
    this.h_btn_gen_pal=true;
    this.h_btn_adivina=false;
  }
  
  adivinaAnagrama(){
    
    if (this.anagrama.palabra_secreta.toLowerCase()===this.palabra_ing.toLowerCase()) {
      console.log("NO HAGAS TRAMPA!!!!");
      this.Mensajes=this.mensajes.MostrarMensaje("NO HAGAS TRAMPA!!!!",false);
    }else{
      this.anagrama.palabra_ingresada=this.palabra_ing;
            
      this.anagrama.palabra_secreta.toLowerCase();
      this.anagrama.palabra_ingresada.toLowerCase();

      let pal= this.anagrama.palabra_secreta.split("");
      let pal2=this.anagrama.palabra_ingresada.split("");

      pal.sort();
      pal2.sort();

      this.anagrama.palabra_secreta=pal.join("");
      this.anagrama.palabra_ingresada= pal2.join("");
      
      if (this.anagrama.palabra_secreta===this.anagrama.palabra_ingresada) {
        console.log(this.anagrama.mensaje_ganador);
        this.Mensajes= this.mensajes.MostrarMensaje(this.anagrama.mensaje_ganador,true);
        this.h_btn_gen_pal=false;
        this.h_btn_adivina=true;
        this.palabra_sec="";
        this.palabra_ing="";
        this.fofo.puntaje+=50;
      this.afs.collection('users_score').doc(this.email).set({email:this.email,puntaje:this.fofo.puntaje})
      }else{
          console.log(this.anagrama.mensaje_perdedor);
          this.Mensajes= this.mensajes.MostrarMensaje(this.anagrama.mensaje_perdedor,false)
        }
      }
  }

}
