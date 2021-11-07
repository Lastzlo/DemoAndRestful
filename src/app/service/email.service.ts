import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {Email} from "../entity/email/email";
import {environment} from "src/environments/environment";

@Injectable({providedIn: 'root'})
export class EmailService {
  private apiServerUrl = environment.apiBaseUrl;

  constructor(private http: HttpClient){}

  public addEmail(email: Email): Observable<Email> {
    return this.http.post<Email>(`${this.apiServerUrl}/api/v1/emails/`, email);
  }

}
