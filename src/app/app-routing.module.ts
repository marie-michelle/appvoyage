import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { SidenavComponent} from './sidenav/sidenav.component';
import { ForfaitsVedettesComponent } from './forfaits-vedettes/forfaits-vedettes.component';
import { BlogueComponent } from './blogue/blogue.component';
import { AdministrationComponent } from './administration/administration.component';
import { ForfaitRabaisComponent } from './forfait-rabais/forfait-rabais.component';
import { AProposComponent } from './a-propos/a-propos.component';
import { ListeForfaitComponent } from './liste-forfait/liste-forfait.component';
import { DialogNewForfaitComponent } from './dialog-new-forfait/dialog-new-forfait.component';
import { TableauDeBordComponent } from './tableau-de-bord/tableau-de-bord.component';


const routes: Routes = [
  { path: '', component: SidenavComponent},
  { path: 'a-propos', component: AProposComponent},
  { path: 'rabais', component: ForfaitRabaisComponent},
  { path: 'meilleures-offres', component: ForfaitsVedettesComponent},
  { path: 'blogue', component: BlogueComponent},
  { path: 'administration', component: AdministrationComponent},
  { path: 'ajouter-forfait', component: DialogNewForfaitComponent},
  { path: 'tableau-bord', component: TableauDeBordComponent},
  { path: '', redirectTo: '/', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
