import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {NovoUsuarioComponent} from "./components/usuario/novo-usuario/novo-usuario.component";
import {UsuarioComponent} from "./components/usuario/usuario.component";
import {NavbarComponent} from "./components/navbar/navbar.component";
import {HomeComponent} from "./components/home/home.component";
import {FooterComponent} from "./components/footer/footer.component";
import {LoginComponent} from "./components/login/login.component";

const routes: Routes = [
  {path: 'novoUsuario', component: NovoUsuarioComponent},
  {path: 'usuario', component: UsuarioComponent},
  {path: 'login', component: LoginComponent},

  {
    path: '',
    component: HomeComponent,
    children:[

      {path: 'navBar', component: NavbarComponent},
      {path: 'footer', component: FooterComponent},


    ],
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
