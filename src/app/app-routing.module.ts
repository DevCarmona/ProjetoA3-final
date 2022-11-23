import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './views/login/login.component';
const routes: Routes = [
  {path: '', component: LoginComponent},
  {path: 'cadastro', loadChildren: ()=> import('./views/cadastro/cadastro.module').then((m) => m.CadastroModule)}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
