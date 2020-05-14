import { PatientActions } from '../actions/patients';
import * as patient from '../actions/patients';

export interface State {
    patientList: any[];
    currentPatientInCare: any;
}

export const initialState: State = {
    patientList: [],
    currentPatientInCare: null
};

export function reducer(state: State = initialState, action: PatientActions): State {
    console.log(action);
    switch (action.type) {
        case patient.GET_PATIENT_LIST_FINISHED: {
            var list = action.payload.data;
            let patientList = list.filter(p => p.status == 0).sort((a, b) => a >= b ? a : b);
            // patientList = patientList.sort((a, b) => a >= b ? a : b);
            const patientInCare = list.find(p => p.status == 1);
            console.log(patientList, patientInCare)
            return Object.assign({}, state, { patientList: patientList, currentPatientInCare: patientInCare });
        }
        // case patient.ADD_NEW_PATIENT_FINISHED: {
        //     var list = action.payload.data;
        //     const patientList = list.map(p => p.status).sort((a, b) => a >= b ? a : b);
        //     const patientInCare = list.find(p => p.status == 1);
        //     return Object.assign({}, state, { patientList: patientList, currentPatientInCare: patientInCare });
        // }
        // case patient.PULL_NEW_PATIENT_FINISHED: {
        //     var list = action.payload.data;
        //     const patientList = list.map(p => p.status).sort((a, b) => a >= b ? a : b);
        //     const patientInCare = list.find(p => p.status == 1);
        //     return Object.assign({}, state, { patientList: patientList, currentPatientInCare: patientInCare });
        // }
        default: {
            return state;
        }
    }
}

export const getPatientList = (state: State): any[] => state.patientList;
export const getCurrentPatientInCare = (state: State): any => state.currentPatientInCare;