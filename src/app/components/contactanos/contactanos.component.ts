import { Component } from '@angular/core';

@Component({
  selector: 'app-contactanos',
  templateUrl: './contactanos.component.html',
  styleUrls: ['./contactanos.component.css']
})
export class ContactanosComponent {

  //title = 'Como usar el Componente Google Maps de Angular 9'; 
 
  // Configuración de Google Maps 
  center = {lat: 24, lng: 12};
  //zoom = 15;
  display?: google.maps.LatLngLiteral;

  registro(){
    alert('Datos registrados exitosamente')
  }
}
