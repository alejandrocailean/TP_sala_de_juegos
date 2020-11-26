export class Jugador {
    nombre:string;
    edad: number;
    score:number;
    
    public constructor(nombre?:string, score?:number, edad?:number){
        if (nombre) {
            this.nombre=nombre;
        }
        if (score) {
            this.score=score;
        } 
          
        
        if(edad){
            this.edad=edad;
        }
    }
}
