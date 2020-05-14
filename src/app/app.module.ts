import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { reducers } from './reducers';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PatientService } from './services/patient.service';
import { AddPatientComponent } from './components/add-patient/add-patient.component';
import { CurrentPatientComponent } from './components/current-patient/current-patient.component';
import { PatientListComponent } from './components/patient-list/patient-list.component';
import { MainViewComponent } from './components/main-view.component';
import { StoreModule } from '@ngrx/store';
import { EffectsModule } from '@ngrx/effects';
import { PatientEffects } from './effects/patients';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    AddPatientComponent,
    CurrentPatientComponent,
    PatientListComponent,
    MainViewComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    StoreModule.forRoot(reducers, {
      initialState: {
        patients: {
          patientList: [],
          currentPatientInCare: null
        }
        
      },
    }),
    EffectsModule.forRoot([PatientEffects])
  ],
  providers: [PatientService],
  bootstrap: [AppComponent]
})
export class AppModule { }
