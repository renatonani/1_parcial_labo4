import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BienvenidaComponent } from './components/bienvenida/bienvenida.component';
import { LoginComponent } from './components/login/login.component';
import { AltaProductoComponent } from './components/alta-producto/alta-producto.component';
import { activateGuard } from './guards/activate.guard';
import { BusquedaProductoComponent } from './components/busqueda-producto/busqueda-producto.component';
import { ListadoProductoPublicoComponent } from './components/listado-producto-publico/listado-producto-publico.component';

const routes: Routes = [
  { path: '', redirectTo: 'login', pathMatch: 'full' }, // Ruta por defecto
  { path: 'bienvenida', component: BienvenidaComponent },
  { path: 'producto/alta', component: AltaProductoComponent, canActivate: [activateGuard]},
  { path: 'login', component: LoginComponent },
  { path: 'producto/detalle', component: BusquedaProductoComponent, canActivate: [activateGuard]},
  { path: 'producto/listado', component: ListadoProductoPublicoComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
