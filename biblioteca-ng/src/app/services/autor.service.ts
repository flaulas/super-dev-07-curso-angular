import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { AutorCadastroRequest, AutorResponse } from '../models/autor.dto';

@Injectable({
  providedIn: 'root'
})
export class AutorService {
  url = "https://api.franciscosensaulas.com/api/v1/biblioteca/autores"

  constructor(private httpClient: HttpClient) { }

  getAll(): Observable<AutorResponse[]> {
    return this.httpClient.get<AutorResponse[]>(this.url);
  }

  create(form: AutorCadastroRequest): Observable<void> {
    return this.httpClient.post<void>(this.url, form);
  }
}
