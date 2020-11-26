import { Component, OnInit } from '@angular/core';
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

  constructor(private mensajes:MostrarMensajeService) {
    this.anagrama=new Anagrama;
    this.h_btn_gen_pal=false;
    this.h_btn_adivina=true;
   }

  ngOnInit(): void {
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
      }else{
          console.log(this.anagrama.mensaje_perdedor);
          this.Mensajes= this.mensajes.MostrarMensaje(this.anagrama.mensaje_perdedor,false)
        }
      }
  }

}
