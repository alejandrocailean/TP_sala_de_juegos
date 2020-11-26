import { ErrorHandler, NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginGuard } from './componentes/Guards/login.guard';

import { AdivinaElNumeroComponent } from './componentes/pages/Juegos/adivina-el-numero/adivina-el-numero.component';
import { AgilidadAritmeticaComponent } from './componentes/pages/Juegos/agilidad-aritmetica/agilidad-aritmetica.component';
import { AnagramaComponent } from './componentes/pages/Juegos/anagrama/anagrama.component';
import { CardsComponent } from './componentes/pages/Juegos/cards/cards.component';
import { PiedraPapelTijeraComponent } from './componentes/pages/Juegos/piedra-papel-tijera/piedra-papel-tijera.component';
import { TatetiComponent } from './componentes/pages/Juegos/tateti/tateti.component';
import { LoginComponent } from './componentes/Pages/login/login.component';
import { RegisterComponent } from './componentes/Pages/register/register.component';
import { RutaAboutComponent } from './componentes/pages/ruta-about/ruta-about.component';
import { RutaHomeComponent } from './componentes/pages/ruta-home/ruta-home.component';
import { RutaJuegosComponent } from './componentes/pages/ruta-juegos/ruta-juegos.component';
import { RutaResultadosComponent } from './componentes/pages/ruta-resultados/ruta-resultados.component';


const routes: Routes = [
  {path:"",component:RutaHomeComponent},
  { path: 'login', component: LoginComponent },
  {path:"ruta-juegos",component:RutaJuegosComponent,
    canActivate:[LoginGuard],  
    children: [
      {path:'ruta-adivina-el-numero', component:AdivinaElNumeroComponent},
      {path:'ruta-agilidad-aritmetica', component:AgilidadAritmeticaComponent},
      {path:'ruta-anagrama',component:AnagramaComponent},
      {path:'ruta-piedra-papel-tijera',component:PiedraPapelTijeraComponent},
      {path:'ruta-tateti',component:TatetiComponent},
      {path:'ruta-cards',component:CardsComponent}
    ]
  },
  {path:"register",component:RegisterComponent},
  {path:"ruta-about",component:RutaAboutComponent},
  {path:"ruta-resultados",component:RutaResultadosComponent},  
  {path:"**",component:ErrorHandler}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
