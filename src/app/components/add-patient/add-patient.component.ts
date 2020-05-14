import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { AppState } from 'src/app/reducers';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { AddNewPatientAction } from 'src/app/actions/patients';

@Component({
  selector: 'app-add-patient',
  templateUrl: './add-patient.component.html',
  styleUrls: ['./add-patient.component.css']
})
export class AddPatientComponent implements OnInit {
  constructor(private store: Store<AppState>) { }
  patientForm:FormGroup;
  patientName: string = '';

  ngOnInit(): void {
    this.patientForm = new FormGroup({
      'name': new FormControl(this.patientName, [
        Validators.required,
        Validators.minLength(4)
      ])
    }); 
  }

  onSubmit(event) {
    event.preventDefault();
    let name = this.patientForm.value.name; 

    this.store.dispatch(new AddNewPatientAction(name));

    this.patientForm = new FormGroup({
      'name': new FormControl(this.patientName, [
        Validators.required,
        Validators.minLength(4)
      ])
    }); 
  }
}
