import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Persona } from '../models/persona';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonasService {

  constructor(private http: HttpClient) {}

  public consultar(): Observable<Persona[]> {
    return this.http.get<Persona[]>('api/personas') .pipe(map((response) => response as Persona[]));
  }
}
