import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-artista',
  templateUrl: './artista.component.html',
  styleUrls: ['./artista.component.css']
})
export class ArtistaComponent implements OnInit {

  artista: any = {};
  tracksPrincipales: any[] = [];
  cargando: boolean;

  constructor(
    private activedRoute: ActivatedRoute,
    private api: ApiService
  ) {
  }

  ngOnInit() {
    this.activedRoute.params.subscribe((params: any) => {
      const id = params.id;

      this.getArtista(id);
      this.getTracksPrincipales(id);
    });
  }

  getArtista(idArtista: string) {
    this.api.getArtista(idArtista)
      .subscribe(artista => {
        this.artista = artista;
        console.log(artista);
        
        this.cargando = true;
      }, error => this.cargando = false);
  }

  getTracksPrincipales(idArtista: string) {
    this.api.getTracksPrincipales(idArtista)
      .subscribe(topTracks => {
        this.tracksPrincipales = topTracks;
      }, error => this.cargando = false);
  }

}
