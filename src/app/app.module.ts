import { BrowserModule } from '@angular/platform-browser';
import { NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { CommonModule } from '@angular/common';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { SidebarComponent } from './layouts/sidebar/sidebar.component';
import { TopbarComponent } from './layouts/topbar/topbar.component';
import { FooterComponent } from './layouts/footer/footer.component';
import { LogoutModalComponent } from './layouts/logout-modal/logout-modal.component';
import { TopButtonComponent } from './layouts/top-button/top-button.component';
import { LayoutComponent } from './layouts/layout/layout.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AgencyComponent } from './agency/agency.component';
import { BusComponent } from './bus/bus.component';
import { TripsComponent } from './trips/trips.component';
import { ProfileComponent } from './profile/profile.component';
import { ChartLineComponent } from './dashboard/chart-line/chart-line.component';
import { ChartPieComponent } from './dashboard/chart-pie/chart-pie.component';
import { FormComponent } from './agency/form/form.component';
import { ProfileFormComponent } from './profile/profile-form/profile-form.component';
import { PasswordFormComponent } from './profile/password-form/password-form.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    SignupComponent,
    SidebarComponent,
    TopbarComponent,
    FooterComponent,
    LogoutModalComponent,
    TopButtonComponent,
    LayoutComponent,
    DashboardComponent,
    AgencyComponent,
    BusComponent,
    TripsComponent,
    ProfileComponent,
    ChartLineComponent,
    ChartPieComponent,
    FormComponent,
    ProfileFormComponent,
    PasswordFormComponent,
  ],
  imports: [
    BrowserModule,
    CommonModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  schemas: [NO_ERRORS_SCHEMA]
})
export class AppModule { }
