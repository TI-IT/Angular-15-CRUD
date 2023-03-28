import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import {CreateRegistrationComponent} from "./create-registration/create-registration.component";
import {RegistrationListComponent} from "./registration-list/registration-list.component";
import {LinksComponent} from "./linkAddress/links/links.component";

const routes: Routes = [
  {path: '', redirectTo: 'register', pathMatch: 'full'},
  {path: 'register', component: CreateRegistrationComponent},
  {path: 'list', component: RegistrationListComponent},
  {path: 'links', component: LinksComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
