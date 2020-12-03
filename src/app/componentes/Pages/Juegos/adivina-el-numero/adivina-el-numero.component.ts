import { Component, OnInit ,Input,Output,EventEmitter} from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { from } from 'rxjs';
import { FirestoreService } from 'src/app/Servicios/firestore/firestore.service';
import { MostrarMensajeService } from 'src/app/Servicios/MostrarMensaje/MostrarMensaje.service';
import {AdivinaElNumero} from '../../../../class/adivina-el-numero';
import {Jugador } from '../../../../class/jugador';


@Component({
  selector: 'app-adivina-el-numero',
  templateUrl: './adivina-el-numero.component.html',
  styleUrls: ['./adivina-el-numero.component.css','../../../../app.component.css']
})
export class AdivinaElNumeroComponent implements OnInit {

  adivina:AdivinaElNumero;
  jugador:Jugador;
  Mensajes:string;
  h_btn_gen_num:boolean;
  h_btn_adivina:boolean;
  mens_perd:boolean;
  fofo;
  email=localStorage.getItem('email');
 
constructor(private mensajes:MostrarMensajeService, private afs:AngularFirestore,private firestore:FirestoreService ){
  this.adivina=new AdivinaElNumero;
  this.jugador=new Jugador;  
  this.h_btn_gen_num=false;
  this.h_btn_adivina=true;
  this.mens_perd=true;
}
  
  ngOnInit() {
    this.firestore.getDato('users_score',this.email).subscribe(data=>{

     
      this.fofo=data.payload.data();
      console.log(this.fofo)
    }
      );
  }

  
  generarNumero(min:number,max:number){
    this.adivina.numero_secreto=Math.floor(Math.random() * (max - min + 1) + min);
    console.log("El numero secreto es: "+this.adivina.numero_secreto);
    this.h_btn_gen_num=true;
    this.h_btn_adivina=false;
  }

  adivinaNumero(){
    if(this.adivina.numero_insertado==this.adivina.numero_secreto){
      this.Mensajes=this.mensajes.MostrarMensaje(this.adivina.mensaje_ganador,true);
      this.h_btn_gen_num=false;
      this.h_btn_adivina=true;
      this.fofo.puntaje+=50;
      this.afs.collection('users_score').doc(this.email).set({email:this.email,puntaje:this.fofo.puntaje})
      
    }
    else{
      if (this.adivina.numero_insertado>this.adivina.numero_secreto) {
        this.Mensajes=this.mensajes.MostrarMensaje("TE PASASTE HERMANO!!! XD",false);
      }else{
        this.Mensajes=this.mensajes.MostrarMensaje("TE QUEDASTE CORTO HERMANO!!! XD",false);
      }
      
    
    }

  }

  
}
