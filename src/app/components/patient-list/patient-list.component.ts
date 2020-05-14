import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState, getPatientList } from 'src/app/reducers';
import { Patient, Status } from 'src/app/models/patient';
import { GetPatientListAction } from 'src/app/actions/patients';

@Component({
  selector: 'app-patient-list',
  templateUrl: './patient-list.component.html',
  styleUrls: ['./patient-list.component.css']
})
export class PatientListComponent implements OnInit {
  patients : any[];

  constructor(private store: Store<AppState>) { }

  ngOnInit(): void {
    this.store.select(getPatientList).subscribe((list : any[]) => {
      this.patients = list;
    });
    this.store.dispatch(new GetPatientListAction());
  }
}
