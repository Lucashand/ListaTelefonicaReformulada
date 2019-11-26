import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ConsultarComponent } from './consultar/consultar.component';
import { CadastrarComponent } from './cadastrar/cadastrar.component';
import { AppComponent } from './app.component';

const routes: Routes = [
  {path: 'consultar', component: ConsultarComponent},
  {path: 'consultar/:url', component: ConsultarComponent},
  {path: 'cadastrar', component: CadastrarComponent},
  {path: 'editar/:id', component: CadastrarComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
