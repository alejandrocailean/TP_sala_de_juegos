import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MostrarMensajeService {
  MostrarMensaje(mensaje:string,ganador:boolean=false):string {
    // this.Mensajes=mensaje;    
    var x = document.getElementById("snackbar");
    if(ganador)
      {
        x.className = "show Ganador";
      }else{
        x.className = "show Perdedor";
      }    
    setTimeout(function(){ 
      x.className = x.className.replace("show", "");     
    }, 3000); 
    return mensaje;     
  } 
constructor() { }

}
