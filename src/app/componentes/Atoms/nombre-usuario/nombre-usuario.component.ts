import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-nombre-usuario',
  templateUrl: './nombre-usuario.component.html',
  styleUrls: ['./nombre-usuario.component.css']
})
export class NombreUsuarioComponent implements OnInit {

  nombreUsuario:string;

  constructor() { }

  ngOnInit(): void {
    this.nombreUsuario=localStorage.getItem('email').toUpperCase();

  }

}
