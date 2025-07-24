import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SecondaryListingService {

  private apiUrl = 'https://send-us-api.vercel.app/api/secondary-listing';
  constructor(private http: HttpClient) {}

  getSecondaryListings(): Observable<any> {
    return this.http.get<any>(this.apiUrl);
  }
}
