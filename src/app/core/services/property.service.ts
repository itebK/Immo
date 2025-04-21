import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Property } from '../models/property.model';

@Injectable({
  providedIn: 'root',
})
export class PropertyService {
  // private jsonUrl = 'mock-properties.json';
  private jsonUrl = 'mock-properties-with-guids.json';

  constructor(private http: HttpClient) { }

  // 🔄 Récupérer toutes les propriétés depuis le JSON local
  getAllProperties(): Observable<Property[]> {
    return this.http.get<Property[]>(this.jsonUrl);
  }

  // ✅ Optionnel : récupérer une seule propriété par ID
  getById(id: string): Observable<Property | undefined> {
    return new Observable((observer) => {
      this.getAllProperties().subscribe((props) => {
        const found = props.find((p) => p.id === id);
        observer.next(found);
        observer.complete();
      });
    });
  }
}
