import { Action } from '@ngrx/store';
import { Injectable } from '@angular/core';
import { Effect, Actions } from '@ngrx/effects';
import * as patients from '../actions/patients';
import { Observable } from 'rxjs';
import { PatientService } from '../services/patient.service';


@Injectable()
export class PatientEffects {
    constructor(private actions$: Actions, private patientService: PatientService) { }
    @Effect()
    getPatientList$: Observable<Action> = this.actions$
        .ofType(patients.GET_PATIENT_LIST)
        .switchMap((action: any) => {
            return this.patientService.getPatients()
                .then((data: any) => ({ data, action }));
        })
        .map((result: any) => {
            return new patients.GetPatientListActionFinished({ data: result.data });
        });

    @Effect()
    addNewPatient$: Observable<Action> = this.actions$
        .ofType(patients.ADD_NEW_PATIENT)
        .switchMap((action: any) => {
            return this.patientService.addNewPatient(action.payload.name)
                .then((data: any) => ({ data, action }));
        })
        .switchMap((action: any) => {
            return this.patientService.getPatients()
                .then((data: any) => ({ data, action }));
        })
        .map((result: any) => {
            return new patients.GetPatientListActionFinished({ data: result.data });
        });

    @Effect()
    pullNewPatient$: Observable<Action> = this.actions$
        .ofType(patients.PULL_NEW_PATIENT)
        .switchMap((action: any) => {
            return this.patientService.pullNewPatient()
                .then((data: any) => ({ data, action }));
        })
        .switchMap((action: any) => {
            return this.patientService.getPatients()
                .then((data: any) => ({ data, action }));
        })
        .map((result: any) => {
            return new patients.GetPatientListActionFinished({ data: result.data });
        });
}
