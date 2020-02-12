import { Component, OnInit } from '@angular/core';
import { ConstantesService } from 'src/app/services/utils/constantes.service';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  autor: string;

  constructor() { }

  ngOnInit() {
    this.autor = ConstantesService.AUTOR;
  }

}
