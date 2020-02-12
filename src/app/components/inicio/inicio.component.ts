import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';

@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {

  cargando: boolean;
  nuevosLanzamientos: any[] = [];

  constructor(
    private api: ApiService
  ) { }

  ngOnInit() {
    this.cargando = true;
    this.getNuevosLanzamientos();
  }

  getNuevosLanzamientos() {
    this.api.getNuevosLanzamientos().subscribe((data: any) => {
      this.nuevosLanzamientos = data;
      this.cargando = false;
    }, error => this.cargando = false);
  }

}
