import { Component, OnInit } from '@angular/core';
import {Contacto, ContactosService} from 'src/app/services/contactos.service';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-listacontactos',
  templateUrl: './listacontactos.component.html',
  styleUrls: ['./listacontactos.component.css']
})
export class ListacontactosComponent implements OnInit {
contactos: Array<Contacto> =[]
  constructor(private serviciocontactos: ContactosService, private fb: FormBuilder) { 
    this.contactos = this.serviciocontactos.getcontactos();
    formulario: FormGroup;
   
  }
  
  ngOnInit(): void {
  }
   }
 


