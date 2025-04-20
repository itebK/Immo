// src/app/core/services/location.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



export interface Region {
  region: string;
  delegations: string[];
}

@Injectable({
  providedIn: 'root'
})
export class LocationService {
  private jsonUrl = 'tunisia-governorates-2025.json';

  constructor(private http: HttpClient) {}

  getRegions(): Observable<Region[]> {
    return this.http.get<Region[]>(this.jsonUrl);
  }
}
