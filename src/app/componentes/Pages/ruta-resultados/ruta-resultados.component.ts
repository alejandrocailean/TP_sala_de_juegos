import { Component, OnInit, Output, EventEmitter } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import { Jugador } from 'src/app/class/jugador';
import { FirestoreService } from "../../../Servicios/firestore/firestore.service";

@Component({
  selector: 'app-ruta-resultados',
  templateUrl: './ruta-resultados.component.html',
  styleUrls: ['./ruta-resultados.component.css']
})
export class RutaResultadosComponent implements OnInit {
  
  lista:any[];

  constructor(private firestore: FirestoreService, private afs:AngularFirestore) {
        
   }

  ngOnInit(): void {
    this.listar()
    
  }

  listar(){
    this.firestore.getDatos('users_score').subscribe((datazos) => {
      this.lista=[];
      datazos.forEach((data: any) => {        
        this.lista.push({
          // id: data.payload.doc.id,
          data: data.payload.doc.data()
        });
      })
      console.log(this.lista);
      // this.materias.emit(this.lista);
    });
  }

}
