import { Action } from '@ngrx/store';

export const GET_PATIENT_LIST = 'Get_Patient_List';
export const ADD_NEW_PATIENT = 'Add_New_Patient';
export const PULL_NEW_PATIENT = 'Pull_New_Patient';
export const GET_PATIENT_LIST_FINISHED = 'Get_Patient_List_Finished';

export class GetPatientListAction implements Action {
    readonly type = GET_PATIENT_LIST;
}

export class AddNewPatientAction implements Action {
    readonly type = ADD_NEW_PATIENT;
    constructor(public payload: string) { }
}

export class PullNewPatientAction implements Action {
    readonly type = PULL_NEW_PATIENT;
    constructor(public payload: any) { }
}

export class GetPatientListActionFinished {
    readonly type = GET_PATIENT_LIST_FINISHED;
    constructor(public payload: any) { }
}

export type PatientActions = GetPatientListAction| GetPatientListActionFinished | AddNewPatientAction | PullNewPatientAction;
