import { createSelector } from 'reselect';
import { ActionReducerMap, combineReducers, ActionReducer, MetaReducer } from '@ngrx/store';
import * as fromPatients from './patients';

export interface AppState {
  patients: fromPatients.State;
}

export const reducers: ActionReducerMap<AppState> = {
  patients: fromPatients.reducer
};

const getPatientsState = (state: AppState) => state.patients || {};

export const getPatientList = createSelector(getPatientsState, fromPatients.getPatientList);
export const getCurrentPatientInCare = createSelector(getPatientsState, fromPatients.getCurrentPatientInCare);