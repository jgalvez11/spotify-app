import { map, debounce, timeout, concatMap } from 'rxjs/operators';
import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { interval, timer, from } from 'rxjs';
import { ConstantesService } from './utils/constantes.service';

@Injectable({
  providedIn: 'root'
})
export class ApiService {

  constructor(
    private http: HttpClient
  ) { }

  getHeaders(): HttpHeaders {
    const token = JSON.parse(localStorage.getItem(ConstantesService.TOKEN));
    return new HttpHeaders({
      Authorization: `${token.token_type} ${token.access_token}`
    });
  }

  getToken() {
    return this.http.get(environment.urlApiToken + `/spotify/${environment.clientID}/${environment.clientSecret}`);
  }

  getNuevosLanzamientos() {
    return this.http.get(environment.urlApiSpotify + '/browse/new-releases?limit=20', { headers: this.getHeaders() })
      .pipe(map((data: any) => data.albums.items));
  }

  getArtistas(palabra: string) {
    return this.http.get(environment.urlApiSpotify + `/search?q=${palabra}&type=artist&limit=15`, { headers: this.getHeaders() })
      .pipe(map((data: any) => data.artists.items));
  }

  getArtista(idArtista: string) {
    return this.http.get(environment.urlApiSpotify + `/artists/${idArtista}`, { headers: this.getHeaders() });
  }

  getTracksPrincipales(idArtista: string) {
    return this.http.get(environment.urlApiSpotify + `/artists/${idArtista}/top-tracks?country=us`, { headers: this.getHeaders() })
      .pipe(map((data: any) => data.tracks));
  }
}
