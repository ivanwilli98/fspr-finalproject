import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { SignupComponent } from './signup/signup.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { AgencyComponent } from './agency/agency.component';
import { BusComponent } from './bus/bus.component';
import { TripsComponent } from './trips/trips.component';
import { ProfileComponent } from './profile/profile.component';


const routes: Routes = [
  { path: '', redirectTo: 'dashboard', pathMatch: 'full' },
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: SignupComponent },
  { path: 'dashboard', 
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: DashboardComponent,
        }
      ]
  },
  { path: 'agency', 
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: AgencyComponent,
        }
      ]
  },
  { path: 'bus', 
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: BusComponent,
        }
      ]
  },
  { path: 'trips', 
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: TripsComponent,
        }
      ]
  },
  { path: 'profile', 
      component: LayoutComponent,
      children: [
        {
          path: '',
          component: ProfileComponent,
        }
      ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
