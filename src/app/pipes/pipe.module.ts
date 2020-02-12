import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NoImagenPipe } from './no-imagen.pipe';
import { DomSeguroPipe } from './dom-seguro.pipe';



@NgModule({
  declarations: [
    NoImagenPipe,
    DomSeguroPipe
  ],
  imports: [
    CommonModule
  ],
  exports: [
    NoImagenPipe,
    DomSeguroPipe
  ]
})
export class PipeModule { }
