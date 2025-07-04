import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class SendDataService {
  private apiUrl = 'https://send-us-api.vercel.app/zoho/send-data';

  constructor(private http: HttpClient) {}

  submitContactForm(formData: any): Observable<any> {
    const payload = {
      First_Name: formData.firstName,
      Last_Name: formData.lastName,
      Email: formData.email,
      Phone: formData.phoneNumber,
      Mailing_Country: formData.country,
      Developer: formData.developer,
      Property: formData.property,
    };
    return this.http.post(this.apiUrl, payload);
  }
}
