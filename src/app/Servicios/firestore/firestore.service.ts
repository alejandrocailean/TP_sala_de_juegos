import { Injectable } from '@angular/core';
import { AngularFirestore} from '@angular/fire/firestore';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class FirestoreService {

  constructor(private firestore: AngularFirestore) { }
  
  //ABM:

  //Alta
  public agregar(coleccion:string,data:{}){
    return this.firestore.collection(coleccion).add(data);
  }

  //Baja
  public eliminar (coleccion:string,documentId:any){    
    this.firestore.collection(coleccion).doc(documentId).delete();
  }

  //Modificacion
  public modificacion(coleccion:string,documentId:any,data:{}){
    return this.firestore.collection(coleccion).doc(documentId).set(data);    
  }

  //Traer un dato
  public getDato(coleccion:string, documentId: string) {
    return this.firestore.collection(coleccion).doc(documentId).snapshotChanges();
  }
  //Traer todos los datos
  public getDatos(coleccion:string) {
    return this.firestore.collection(coleccion).snapshotChanges();
  }
  
  //Sumar puntaje
  public sumarPuntaje (email:string){
    return this.firestore.collection("users_score"),ref =>ref.where('email','=',email);
    
  }
}


