import { ClinicaltrialsComponent } from './clinicaltrials/clinicaltrials.component';
import { DrugsComponent } from './drugs/drugs.component';
import { NewsComponent } from './news/news.component';
import { SigninComponent } from './signin/signin.component';
import { HomepageComponent } from './homepage/homepage.component';
import { Routes } from "@angular/router";
import { RegisterComponent } from './register/register.component';
import { DashboardComponent } from './dashboard/dashboard.component';

import { AuthGuard } from "../core/auth/auth.guard";

export const appRoutes: Routes = [
  {path: '', pathMatch: 'full', component: HomepageComponent},
  {path: 'login', pathMatch: 'full', component: SigninComponent},
  {path: 'register', pathMatch: 'full', component: RegisterComponent},
  {path: 'dashboard', pathMatch: 'full', component: DashboardComponent},
  {path: 'news', pathMatch: 'full', component: NewsComponent},
  {path: 'drugs', pathMatch: 'full', component: DrugsComponent},
  {path: 'trails', pathMatch: 'full', component: ClinicaltrialsComponent}
];
