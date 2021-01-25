import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import { ForfaitComponent } from './forfait/forfait.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ForfaitMiniComponent } from './forfait-mini/forfait-mini.component';
import { EtoileComponent } from './etoile/etoile.component';
import { FormulaireForfaitComponent } from './formulaire-forfait/formulaire-forfait.component';
import { SidenavComponent } from './sidenav/sidenav.component';

import { ForfaitsVedettesPipe } from './forfaits-vedettes.pipe';
import { NbrEtoilesPipe } from './nbr-etoiles.pipe';

import { MatCardModule } from '@angular/material/card';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { FlexLayoutModule } from '@angular/flex-layout';
import { MatGridListModule } from '@angular/material/grid-list';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';
import { MatIconModule } from '@angular/material/icon';
import { FormsModule } from '@angular/forms';
import { MatSelectModule } from '@angular/material/select';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { MatTableModule } from '@angular/material/table';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatCheckboxModule } from '@angular/material/checkbox';
import { MatSliderModule } from '@angular/material/slider';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatNativeDateModule } from '@angular/material/core';
import { ReactiveFormsModule } from '@angular/forms';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FooterComponent } from './footer/footer.component';
import { NavigationComponent } from './navigation/navigation.component';
import { ForfaitsVedettesComponent } from './forfaits-vedettes/forfaits-vedettes.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { AdministrationComponent } from './administration/administration.component';

import { BlogueComponent } from './blogue/blogue.component';
import { FichesVedetteComponent } from './fiches-vedette/fiches-vedette.component';

import { HttpClientModule } from '@angular/common/http';
import { ForfaitService } from './forfait.service';
import { ForfaitRabaisComponent } from './forfait-rabais/forfait-rabais.component';
import { ForfaitRabaisPipe } from './forfait-rabais.pipe';
import { HeaderComponent } from './header/header.component';
import { FormulaireRechercheComponent } from './formulaire-recherche/formulaire-recherche.component';

@NgModule({
  declarations: [
    AppComponent,
    ListeForfaitComponent,
    ForfaitComponent,
    ForfaitMiniComponent,
    EtoileComponent,
    FormulaireForfaitComponent,
    SidenavComponent,
    ForfaitsVedettesPipe,
    NbrEtoilesPipe,
    FooterComponent,
    NavigationComponent,
    ForfaitsVedettesComponent,
    AProposComponent,
    AdministrationComponent,
    BlogueComponent,
    FichesVedetteComponent,
    ForfaitRabaisComponent,
    ForfaitRabaisPipe,
    HeaderComponent,
    FormulaireRechercheComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    MatCardModule,
    MatToolbarModule,
    MatButtonModule,
    FlexLayoutModule,
    MatGridListModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,
    MatSelectModule,
    MatAutocompleteModule,
    MatSidenavModule,
    MatCheckboxModule,
    MatSliderModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatTableModule,
    ReactiveFormsModule,
    NgbModule,
    HttpClientModule,
  ],
  providers: [ForfaitService],
  bootstrap: [AppComponent]

})
export class AppModule { }
