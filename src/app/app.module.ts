import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { HomeComponent } from './home/home.component';
import { FarmsComponent } from './farms/farms.component';
import { FarmService } from './farms/farms.service';
import { RouterModule, Routes } from '@angular/router';
import { HttpClientModule } from '@angular/common/http';
import { FormComponent } from './farms/form.component';
import { FormsModule } from '@angular/forms';
import { ReportComponent } from './farms/report.component';
import { ChickensComponent } from './chickens/chickens.component';
import { ChickenService } from './chickens/chickens.service';
import { MarketComponent } from './market/market.component';
import { EggsComponent } from './eggs/eggs.component';
import { EggService } from './eggs/eggs.service';

const routes: Routes = [
  {path: '', redirectTo: '\home', pathMatch: 'full'},
  {path: 'home', component: HomeComponent},
  {path: 'farms', component: FarmsComponent},
  {path: 'farms/form/:id', component: FormComponent},
  {path: 'farms/report/:id', component: ReportComponent},
  {path: 'farms/market', component: MarketComponent}


];
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    FarmsComponent,
    FormComponent,
    ReportComponent,
    ChickensComponent,
    MarketComponent,
    EggsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    RouterModule.forRoot(routes)
  ],
  providers: [FarmService, ChickenService, EggService],
  bootstrap: [AppComponent]
})
export class AppModule { }
