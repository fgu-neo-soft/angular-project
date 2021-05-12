import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './composants/home/home.component';
import { StagiaireComponent } from './composants/stagiaire/stagiaire.component';
import { AdresseComponent } from './composants/adresse/adresse.component';
import { ErrorComponent } from './composants/error/error.component';
import { TemplateDrivenComponent } from './composants/formulaires/template-driven/template-driven.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ReactiveFormComponent } from './composants/formulaires/reactive-form/reactive-form.component';
import { PersonneComponent } from './composants/personne/personne/personne.component';
import { PersonneDetailsComponent } from './composants/personne/personne-details/personne-details.component';
import { PersonneUpdateComponent } from './composants/personne/personne-update/personne-update.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { NgxBootstrapModule } from './shared/modules/ngx-bootstrap.module';
import { MaterialmoduleModule } from './shared/modules/materialmodule.module';
import { MaterialTableComponent } from './composants/material/material-table/material-table.component';
import { AuthComponent } from './composants/auth/auth.component';
import { VehiculeModule } from './modules/vehicule/vehicule.module';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    StagiaireComponent,
    AdresseComponent,
    ErrorComponent,
    TemplateDrivenComponent,
    ReactiveFormComponent,
    PersonneComponent,
    PersonneDetailsComponent,
    PersonneUpdateComponent,
    MaterialTableComponent,
    AuthComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NgxBootstrapModule,
    MaterialmoduleModule,
    VehiculeModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
  constructor() {
    console.log('app module');
  }
}
