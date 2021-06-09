import { Component, OnInit } from '@angular/core';
import {Contacto, ContactosService} from 'src/app/services/contactos.service';
@Component({
  selector: 'app-listacontactos',
  templateUrl: './listacontactos.component.html',
  styleUrls: ['./listacontactos.component.css']
})
export class ListacontactosComponent implements OnInit {
contactos: Array<Contacto> =[]
  constructor(private serviciocontactos: ContactosService) { 
    this.contactos = this.serviciocontactos.getcontactos();
  }

  ngOnInit(): void {
  }

}
