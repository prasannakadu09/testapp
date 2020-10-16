import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { EmployeelistComponent } from './employeelist/employeelist.component';
 

const routes: Routes = [
	{ path: "", redirectTo: "home", pathMatch: "full" },
  { path: "home", 
  	component: HomeComponent 
  },
   
   {
   	path: 'employeelist',
   	component: EmployeelistComponent
   },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
