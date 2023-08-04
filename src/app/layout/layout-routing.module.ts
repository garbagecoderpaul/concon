
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';;
import { TestGuardGuard } from '../service/guards/test-guard/test-guard.guard';
import { ComicsComponent } from './comics/comics.component';
import { DocumentariesComponent } from './documentaries/documentaries.component';
import { ConfidentialComponent } from './confidential/confidential.component';
import { MintPageComponent } from './mint-page/mint-page.component';
import { ComicDetailComponent } from './comic-detail/comic-detail.component';
import { TokenComponent } from './token/token.component';

const routes: Routes = [
  { path: '', component: DashboardComponent, canActivate:[TestGuardGuard]},
  { path: 'comics', component: ComicsComponent, canActivate:[TestGuardGuard]},
  { path: 'comicss/:d', component: ComicDetailComponent, canActivate:[TestGuardGuard]},
  { path: 'documentaries', component: DocumentariesComponent, canActivate:[TestGuardGuard]},
  { path: 'voting', component: ConfidentialComponent, canActivate:[TestGuardGuard]},
  { path: 'mint', component: MintPageComponent, canActivate:[TestGuardGuard]},
  { path: 'token', component: TokenComponent, canActivate:[TestGuardGuard]},
];

@NgModule({
  imports: [
    RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class LayoutRoutingModule { }
