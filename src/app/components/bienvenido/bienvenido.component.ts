import { Component, OnInit } from '@angular/core';
import { ApiService } from 'src/app/services/api.service';
import { ConstantesService } from 'src/app/services/utils/constantes.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-bienvenido',
  templateUrl: './bienvenido.component.html',
  styleUrls: ['./bienvenido.component.css']
})
export class BienvenidoComponent implements OnInit {

  cargando: boolean;
  contador: number;

  constructor(
    private api: ApiService,
    private router: Router
  ) {
    this.contador = 0;
  }

  ngOnInit() {
    this.getTokenApi();
  }

  getTokenApi() {
    this.cargando = true;
    this.api.getToken().subscribe((token: any) => {
      localStorage.setItem(ConstantesService.TOKEN, JSON.stringify(token));
      this.irAInicio();
    }, error => {
      this.contador++;
      if (this.contador < 3) {
        this.getTokenApi();
      }
    });
  }

  irAInicio() {
    this.cargando = false;
    this.router.navigate(['/inicio']);
  }

}
