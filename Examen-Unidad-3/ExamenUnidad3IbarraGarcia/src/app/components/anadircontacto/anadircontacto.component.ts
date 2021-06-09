import { Component, OnInit } from '@angular/core';
import {FormBuilder, FormGroup, Validators} from '@angular/forms';
@Component({
  selector: 'app-anadircontacto',
  templateUrl: './anadircontacto.component.html',
  styleUrls: ['./anadircontacto.component.css']
})
export class AnadircontactoComponent implements OnInit {
  formulario: FormGroup;
  constructor(private fb: FormBuilder) {
    this.crearFormulario();
    
   }

  ngOnInit(): void {
  }

  crearFormulario(){
    this.formulario = this.fb.group({
      nombre: [''],
      apellidos:[''],
      descripcion:[''],
      sexo:[''],
      empresa:[''],
      correo:[''],
      telefono:['']
    });
  }
  guardar(){
  
      console.log(this.formulario.value);
    
    
  }
  
}

  

  


