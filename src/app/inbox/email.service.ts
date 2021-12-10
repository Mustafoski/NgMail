import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { IEmail } from './email';
import { Observable } from 'rxjs';

interface IEmailSummary {
  id: string;
  subject: string;
  from: string;
}

@Injectable({
  providedIn: 'root',
})
export class EmailService {
  rootUrl = 'https://api.angular-email.com';
  constructor(private http: HttpClient) {}

  getEmails(): Observable<IEmailSummary[]> {
    return this.http.get<IEmailSummary[]>(`${this.rootUrl}/emails`);
  }

  getEmail(id: string): Observable<IEmail> {
    return this.http.get<IEmail>(`${this.rootUrl}/emails/${id}`);
  }

  sendEmail(email: IEmail): Observable<any> {
    return this.http.post(`${this.rootUrl}/emails`, email);
  }
}
