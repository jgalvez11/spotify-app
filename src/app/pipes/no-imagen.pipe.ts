import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'noImagen'
})
export class NoImagenPipe implements PipeTransform {

  transform(images: any[]): string {
    if (!images) {
      return 'assets/images/no_image.png';
    }

    if (images.length > 0) {
      return images[0].url;
    } else {
      return 'assets/images/no_image.png';
    }
  }

}
