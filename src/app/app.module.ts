import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { Routes, RouterModule, ActivatedRoute, Params } from '@angular/router';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatButtonModule, MatTableModule, MatInputModule, MatPaginatorModule, MatSortModule, MatFormFieldModule, MatNativeDateModule } from '@angular/material';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { CookieService } from 'angular2-cookie/core';
import { IncidentsComponent } from './incidents/incidents.component';
import { DataTablesModule } from 'angular-datatables';
import { HeaderComponent } from './header/header.component';
import { DepartmentService } from '../services/department.service';
import { HttpModule } from '@angular/http';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AuthGuardService } from './auth-guard.service';
import { AgmCoreModule } from '@agm/core';
import { SearchListPipe } from './pipes/search-list.pipe';
import { DataTableModule } from "ng2-data-table";
import { PriorityPipe } from './pipes/priority.pipe';
import { SearchFieldPipe } from './pipes/search-field.pipe';
import { LimitPipe } from './pipes/limit.pipe';
import { OrderByPipe } from './pipes/order-by.pipe';
import { HistoryPipe } from './pipes/history.pipe';
import { CustomDateFilter } from './pipes/customdate.pipe';
const routing: Routes = [
  { path: '', component: LoginComponent },
  { path: 'IncidentLogin', component: IncidentsComponent },


]
@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    IncidentsComponent,
    HeaderComponent,
    SearchListPipe,
    PriorityPipe,
    SearchFieldPipe,
    LimitPipe,
    OrderByPipe,
    HistoryPipe,
    CustomDateFilter,
  ],
  imports: [
    BrowserModule,
    FormsModule,
    RouterModule.forRoot(routing),
    BrowserAnimationsModule,
    MatButtonModule,
    MatTableModule,
    DataTableModule,
    MatPaginatorModule,
    MatSortModule,
    MatDatepickerModule,
    MatInputModule,
    DataTablesModule,
    MatFormFieldModule,
    MatNativeDateModule,
    HttpModule,
    HttpClientModule,
    AgmCoreModule.forRoot({
      // please get your own API key here:
      // https://developers.google.com/maps/documentation/javascript/get-api-key?hl=en
      apiKey: 'AIzaSyAYZQRDl6BO70jUXhVUAyqcCbcgaR0trAM'
    }),
  ],
  providers: [DepartmentService, CookieService, AuthGuardService,],
  bootstrap: [AppComponent]
})
export class AppModule { }
