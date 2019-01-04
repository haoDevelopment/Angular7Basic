import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { DashboardComponent } from './dashboard/dashboard.component';
import { HeroesComponent } from './heroes/heroes.component';
import { HeroDetailComponent } from './hero-detail/hero-detail.component';
import { TestComponentComponent } from "./test-component/test-component.component";
import { PipesComponent } from "./pipes/pipes.component";
import { FormComponent } from "./form/form.component";
import { EmployeeComponent } from "./employee/employee.component";
import { EmployeeDetailComponent } from "./employee-detail/employee-detail.component";
import { EmployeeOverviewComponent } from "./employee-detail/employee-overview/employee-overview.component";
import { EmployeeProjectComponent } from "./employee-detail/employee-project/employee-project.component";
import { EmployeeEditComponent } from "./employee-edit/employee-edit.component";

const routes: Routes = [
  { path: '', redirectTo: '/dashboard', pathMatch: 'full' },
  { path: 'test-component', component: TestComponentComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'detail/:id', component: HeroDetailComponent },
  { path: 'heroes', component: HeroesComponent },
  { path: 'pipes', component: PipesComponent},
  { path: 'form', component: FormComponent},
  { path: 'employee', component: EmployeeComponent},
  { path: 'employee/:id', component: EmployeeEditComponent},
  { 
    path: 'employee-detail/:id', component: EmployeeDetailComponent ,
    children: [
      {path: 'overview' ,  component: EmployeeOverviewComponent},
      {path: 'project' ,  component: EmployeeProjectComponent}
    ]
  },
  { path: '**', component: DashboardComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
