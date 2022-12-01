import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NovoUsuarioComponent} from "./components/usuario/novo-usuario/novo-usuario.component";
import {UsuarioComponent} from "./components/usuario/usuario.component";
import {NavbarComponent} from "./components/navbar/navbar.component";

const routes: Routes = [
  {path: 'novoUsuario', component: NovoUsuarioComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'navBar', component: NavbarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
