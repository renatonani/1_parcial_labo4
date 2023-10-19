import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { initializeApp,provideFirebaseApp } from '@angular/fire/app';
import { environment } from '../environments/environment';
import { provideAuth,getAuth } from '@angular/fire/auth';
import { provideFirestore,getFirestore } from '@angular/fire/firestore';
import { AngularFireModule } from '@angular/fire/compat';
import { LoginComponent } from './components/login/login.component';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { PaisesComponent } from './components/paises/paises.component';
import { DetalleProductoComponent } from './components/detalle-producto/detalle-producto.component';
import { PaisProductoComponent } from './components/pais-producto/pais-producto.component';
import { ListadoProductoComponent } from './components/listado-producto/listado-producto.component';
import { BusquedaProductoComponent } from './components/busqueda-producto/busqueda-producto.component';
import { ListadoProductoPublicoComponent } from './components/listado-producto-publico/listado-producto-publico.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    BienvenidaComponent,
    AltaProductoComponent,
    PaisesComponent,
    DetalleProductoComponent,
    PaisProductoComponent,
    ListadoProductoComponent,
    BusquedaProductoComponent,
    ListadoProductoPublicoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    AngularFireModule.initializeApp(environment.firebase),
    provideFirebaseApp(() => initializeApp(environment.firebase)),
    provideAuth(() => getAuth()),
    provideFirestore(() => getFirestore())
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
