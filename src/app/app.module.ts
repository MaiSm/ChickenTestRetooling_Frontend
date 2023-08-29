import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { DetailsComponent } from './details/details.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmService } from './farms/farms.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './farms/form.component';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from './farms/report.component';
import { ChickensComponent } from './chickens/chickens.component';
import { ChickenService } from './chickens/chickens.service';

const routes: Routes = [
  //{path: '', redirectTo: '\clientes', pathMatch: 'full'},
  {path: 'farms', component: FarmsComponent},
  {path: 'farms/form/:id', component: FormComponent},
  {path: 'farms/report/:id', component: ReportComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    DetailsComponent,
    FarmsComponent,
    FormComponent,
    ReportComponent,
    ChickensComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FarmService, ChickenService],
  bootstrap: [AppComponent]
})
export class AppModule { }
