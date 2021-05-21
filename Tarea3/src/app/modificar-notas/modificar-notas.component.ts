import { Component, OnInit } from '@angular/core';
import {AbstractControl, FormBuilder,FormControl,FormGroup,Validators} from '@angular/forms';
import { Notas } from '../notas';
import { ServicioInfoService } from '../servicio-info.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-modificar-notas',
  templateUrl: './modificar-notas.component.html',
  styleUrls: ['./modificar-notas.component.scss']
})
export class ModificarNotasComponent implements OnInit {
  formulario:FormGroup;
  constructor(private fb:FormBuilder,private servicio:ServicioInfoService,private route:Router) {
    this.formulario=this.fb.group({
      titulo: ['',Validators.required],
      estado:['',Validators.required],
      descripcion:['',[Validators.required,Validators.maxLength(150)]]
    });
   }

  ngOnInit(): void {
  }
  ModificarDatos(){
    this.EnviarDatos();
  }

  EnviarDatos(){
    let lista:Array<Notas>=[{ //Esto lo hice de esta manera, ya que no sabia como declarar un objeto de tipo de la interfaz Notas
      titulo:this.formulario.get('titulo')?.value,
      estado:this.formulario.get('estado')?.value,
      descripcion:this.formulario.get('descripcion')?.value
    }]

    console.log(lista);
    //this.servicio.GuardarDatos(lista[0]).subscribe(notas=>{
      //console.log(notas);
    //});
    
    //this.route.navigate(['/mostrar-notas']);
  }
}
