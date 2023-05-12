import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePageComponent } from './components/home-page/home-page.component';
import { LoginComponent } from './components/login/login.component';

const routes: Routes = [{path:'',component:LoginComponent}, {path:'home', component:HomePageComponent},{path:'popup',component:PopupmoviedetailsComponent},{path:'admin-dashboard',component:AdmindashboardComponent}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
