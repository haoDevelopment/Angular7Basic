import { NgModule }       from '@angular/core';
import { BrowserModule }  from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';

// import { HttpClientInMemoryWebApiModule } from 'angular-in-memory-web-api';
// import { InMemoryDataService }  from './in-memory-data.service';

import { AppRoutingModule }     from './app-routing.module';

import { AppComponent }         from './app.component';
import { DashboardComponent }   from './dashboard/dashboard.component';
import { HeroDetailComponent }  from './hero-detail/hero-detail.component';
import { HeroesComponent }      from './heroes/heroes.component';
import { HeroSearchComponent }  from './hero-search/hero-search.component';
import { MessagesComponent }    from './messages/messages.component';
import { TestComponentComponent } from './test-component/test-component.component';
import { PipesComponent } from './pipes/pipes.component';
import { FormComponent } from './form/form.component';
import { EmployeeComponent } from './employee/employee.component';
//Services
import { EmployeeService } from "./services/employee/employee.service";
import { EmployeeDetailComponent } from './employee-detail/employee-detail.component';
import { EmployeeProjectComponent } from './employee-detail/employee-project/employee-project.component';
import { EmployeeOverviewComponent } from './employee-detail/employee-overview/employee-overview.component';
import { LoginComponent } from './login/login.component';
import { EmployeeEditComponent } from './employee-edit/employee-edit.component';

@NgModule({
  imports: [
    BrowserModule,
    FormsModule,
    AppRoutingModule,
    HttpClientModule,

    // The HttpClientInMemoryWebApiModule module intercepts HTTP requests
    // and returns simulated server responses.
    // Remove it when a real server is ready to receive requests.
    // HttpClientInMemoryWebApiModule.forRoot(
    //   InMemoryDataService, { dataEncapsulation: false }
    // )
  ],
  declarations: [
    AppComponent,
    DashboardComponent,
    HeroesComponent,
    HeroDetailComponent,
    MessagesComponent,
    HeroSearchComponent,
    TestComponentComponent,
    PipesComponent,
    FormComponent,
    EmployeeComponent,
    EmployeeDetailComponent,
    EmployeeProjectComponent,
    EmployeeOverviewComponent,
    LoginComponent,
    EmployeeEditComponent
  ],
  providers: [EmployeeService],
  bootstrap: [ AppComponent ]
})
export class AppModule { }
