import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { MatSliderModule } from '@angular/material/slider';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CommonModule } from '@angular/common';
import { AngularFireModule   } from '@angular/fire';
import { AngularFirestoreModule } from '@angular/fire/firestore';
import { environment } from '../environments/environment';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";


import { RutaJuegosComponent } from './componentes/Pages/ruta-juegos/ruta-juegos.component';
import { RutaAboutComponent } from './componentes/Pages/ruta-about/ruta-about.component';
import { RutaHomeComponent } from './componentes/Pages/ruta-home/ruta-home.component';
import { RutaResultadosComponent } from './componentes/Pages/ruta-resultados/ruta-resultados.component';
import { AdivinaElNumeroComponent } from './componentes/Pages/Juegos/adivina-el-numero/adivina-el-numero.component';
import { AnagramaComponent } from './componentes/Pages/Juegos/anagrama/anagrama.component';
import { PiedraPapelTijeraComponent } from './componentes/Pages/Juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { AgilidadAritmeticaComponent } from './componentes/Pages/Juegos/agilidad-aritmetica/agilidad-aritmetica.component';
import { TatetiComponent } from './componentes/Pages/Juegos/tateti/tateti.component';
import { ListadoComponent} from '../app/componentes/Organism/listado/listado.component';
import { CardsComponent } from './componentes/Pages/Juegos/cards/cards.component';
import { CardsService } from './Servicios/Cards/cards.service';
import { MostrarMensajeService } from './Servicios/MostrarMensaje/MostrarMensaje.service';
import { CarrouselComponent } from './componentes/Atoms/carrousel/carrousel.component';
import { NavComponent } from "./componentes/Organism/Nav/Nav.component";
import { FooterComponent } from "./componentes/Organism/Footer/Footer.component";
import { NombreUsuarioComponent } from './componentes/Atoms/nombre-usuario/nombre-usuario.component';
import { DestacadoComponent } from './componentes/Organism/destacado/destacado.component';
import { LoginComponent } from './componentes/Pages/login/login.component';
import { RegisterComponent } from './componentes/Pages/register/register.component';


@NgModule({
  declarations: [
    AppComponent,
    RutaJuegosComponent,
    RutaAboutComponent,
    RutaHomeComponent,
    RutaResultadosComponent,
    AdivinaElNumeroComponent,
    AnagramaComponent,
    PiedraPapelTijeraComponent,
    AgilidadAritmeticaComponent,
    TatetiComponent,
    ListadoComponent,
    CardsComponent,
    CarrouselComponent,
    NavComponent,
    FooterComponent,
    NombreUsuarioComponent,
    DestacadoComponent,
    LoginComponent,
    RegisterComponent
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    MatSliderModule,
    BrowserAnimationsModule,
    HttpClientModule,
    CommonModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFirestoreModule,
    FormsModule,
    ReactiveFormsModule
     
    
  ],
  providers: [HttpClient,MostrarMensajeService,CardsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
