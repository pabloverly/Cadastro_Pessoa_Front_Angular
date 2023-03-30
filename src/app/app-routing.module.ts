import { PessoasComponent } from './components/pessoas/pessoas.component';
import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SobreComponent } from './components/sobre/sobre.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{
  path: 'pessoas', 
  component: PessoasComponent}  ,
  {
  path: 'home', 
  component: HomeComponent},
  {
  path: 'sobre',
  component: SobreComponent
  },
  {
    path: '',
    pathMatch: 'full',
    component: LoginComponent
    }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
