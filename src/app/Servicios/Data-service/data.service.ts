import { Injectable } from '@angular/core';

import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  private datos={};


  constructor(
    private httpclient:HttpClient
  ) { }

  getCountries():Observable<any[]>{
    return this.httpclient.get<any>('https://restcountries.eu/rest/v2/all');
  }
  getDatos(){
    return this.datos;
  }

  setDatos(value:object){
    this.datos=value;
  }

}
