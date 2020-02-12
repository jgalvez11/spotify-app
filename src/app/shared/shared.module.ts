import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule } from '@angular/router';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { SpinnerComponent } from './spinner/spinner.component';
import { DetalleComponent } from './detalle/detalle.component';
import { PipeModule } from '../pipes/pipe.module';

@NgModule({
  declarations: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    DetalleComponent
  ],
  imports: [
    PipeModule,
    CommonModule,
    RouterModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    SpinnerComponent,
    DetalleComponent
  ]
})
export class SharedModule { }
