import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-detalle',
  templateUrl: './detalle.component.html',
  styleUrls: ['./detalle.component.css']
})
export class DetalleComponent implements OnInit {

  @Input() items: any[] = [];

  constructor(
    private router: Router
  ) { }

  ngOnInit() {
  }

  verDetalleArtista(artista: any) {
    let idArtista: string;

    if (artista.type === 'artist') {
      idArtista = artista.id;
    } else {
      idArtista = artista.artists[0].id;
    }

    this.router.navigate(['/artista', idArtista]);
  }

}
