import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { AppState } from '../reducers';
import { Store } from '@ngrx/store';
import { baseUrl } from './service-config';
import { Patient, Status } from '../models/patient';

@Injectable({
  providedIn: 'root'
})
export class PatientService {
  private baseUrl = `${baseUrl}Queue`;

  constructor(private http: HttpClient, private store: Store<AppState>) {}
  
  getPatients() {
    return new Promise((res, rej) => {
      let url = this.baseUrl;
        this.http.get(url).subscribe((data: any) => {
          console.log(data);
          res(data);
        });
    });
  }

  addNewPatient(patient: Patient) {
    return new Promise((res, rej) => {
      let url = this.baseUrl;
      let payload = patient;
        this.http.post(url, payload).subscribe((data: any) => {
          res(data);
        });
    });
  }

  pullNewPatient() {
    return new Promise((res, rej) => {
      let url = this.baseUrl;
        this.http.get(url).subscribe((data: any) => {
          res(data);
        });
    });
  }
}
