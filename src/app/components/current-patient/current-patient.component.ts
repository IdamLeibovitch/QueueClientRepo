import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { getCurrentPatientInCare } from 'src/app/reducers';
import { PullNewPatientAction } from 'src/app/actions/patients';

@Component({
  selector: 'app-current-patient',
  templateUrl: './current-patient.component.html',
  styleUrls: ['./current-patient.component.css']
})
export class CurrentPatientComponent implements OnInit {
  constructor(private store: Store<AppState>) { }

  currentPatient: any;
  isButtonDisabled: boolean = false;

  ngOnInit(): void {
    this.store.select(getCurrentPatientInCare).subscribe((patient: any) => {
      this.currentPatient = patient;
    })
  }

  OnBtnClick(){
    this.isButtonDisabled = true;
    this.store.dispatch(new PullNewPatientAction(name));
    setTimeout(() => { this.isButtonDisabled = false; }, 1000);
  }
}
