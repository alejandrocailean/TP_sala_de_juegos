import { utf8Encode } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { FirestoreService } from 'src/app/Servicios/firestore/firestore.service';


import { Hangman } from '../../../../class/hangman';

@Component({
  selector: 'app-mi-juego',
  templateUrl: './mi-juego.component.html',
  styleUrls: ['./mi-juego.component.css']
})
export class MiJuegoComponent implements OnInit {

  playGame : Hangman;
  readonly alphabet = [
    "A", "B", "C", "D", "E", "F", "G", 
    "H", "I", "J", "H", "L", "M", "N", 
    "Ñ", "O", "P", "Q", "R", "S", "T",
    "U", "V", "W", "X", "Y", "Z"];
  wordSecret : string;
  buttons : Array<{letter: string, state : string}>;
  result: any;
  user : any;
  partida : any;
  gano : number = 0;
  perdio : number = 0;
  jugadas : number = 0;  
  fofo;
  email=localStorage.getItem('email');

  constructor(private afs:AngularFirestore,private firestore:FirestoreService) { 
    this.buttons = [];
    this.playGame = new Hangman();
    this.initializeButton();
    this.wordSecret = this.playGame.getWordChoice();

    
  }

  ngOnInit(): void {
    console.log(this.playGame.guion)
    this.playGame.countError = 0;
    this.firestore.getDato('users_score',this.email).subscribe(data=>{     
      this.fofo=data.payload.data();
      console.log(this.fofo)
    }
      );
  }

  play(button){
    this.result = this.playGame.game(button)

    if(this.playGame.countError == 6){
      this.resetGame();
      this.gano = this.partida.gano;
      this.perdio = this.partida.perdio + 1;
      this.jugadas =  this.partida.jugadas + 1;
      
    }else if(this.result){
      this.resetGame();
      this.fofo.puntaje+=50;
      this.afs.collection('users_score').doc(this.email).set({email:this.email,puntaje:this.fofo.puntaje})
      this.gano = this.partida.gano + 1;
      this.perdio = this.partida.perdio;
      this.jugadas =  this.partida.jugadas + 1;
     
    }
  }

  resetGame(){
    setTimeout(() =>{
      window.location.reload();
    }, 2000);
  }

  initializeButton(){
    for (let index = 0; index < this.alphabet.length; index++) {
      this.buttons.push({letter: this.alphabet[index], state: "button-not"});
    }
  }
  
}
