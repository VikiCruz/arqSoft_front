import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavComponent } from './components/nav/nav.component';
import { FooterComponent } from './components/footer/footer.component';
import { RegistroComponent } from './components/registro/registro.component';
import { EquiposComponent } from './components/equipos/equipos.component';
import { LoginComponent } from './components/login/login.component';
import { FacturaComponent } from './components/factura/factura.component';
import { CarritoComponent } from './components/carrito/carrito.component';
import { QuienesomosComponent } from './components/quienesomos/quienesomos.component';
import { RedesocialesComponent } from './components/redesociales/redesociales.component';
import { ContenedorIndexComponent } from './components/contenedor-index/contenedor-index.component';
import { ContenedorCarritoComponent } from './components/contenedor-carrito/contenedor-carrito.component';
import { ContenedorEquiposComponent } from './components/contenedor-equipos/contenedor-equipos.component';
import { ContenedorFacturaComponent } from './components/contenedor-factura/contenedor-factura.component';
import { ContenedorLoginComponent } from './components/contenedor-login/contenedor-login.component';
import { ContenedorRegistroComponent } from './components/contenedor-registro/contenedor-registro.component';
import { InfoTiendaComponent } from './components/info-tienda/info-tienda.component';
import { BannerComponent } from './components/banner/banner.component';
import { PerifericosComponent } from './components/perifericos/perifericos.component';
import { ContenedorPerifericosComponent } from './components/contenedor-perifericos/contenedor-perifericos.component';

@NgModule({
  declarations: [
    AppComponent,
    NavComponent,
    FooterComponent,
    RegistroComponent,
    EquiposComponent,
    LoginComponent,
    FacturaComponent,
    CarritoComponent,
    QuienesomosComponent,
    RedesocialesComponent,
    ContenedorIndexComponent,
    ContenedorCarritoComponent,
    ContenedorEquiposComponent,
    ContenedorFacturaComponent,
    ContenedorLoginComponent,
    ContenedorRegistroComponent,
    InfoTiendaComponent,
    BannerComponent,
    PerifericosComponent,
    ContenedorPerifericosComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
