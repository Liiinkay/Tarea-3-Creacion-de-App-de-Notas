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
  lista:Array<Notas>=[];
  lista1:Array<Notas>=[];
  lista2:Array<Notas>=[];
  lista3:Array<Notas>=[];
  IndexNota:Array<Notas>=[];
  constructor(private fb:FormBuilder,private servicio:ServicioInfoService,private route:Router) {
    this.formulario=this.fb.group({
      notaModificar:['',Validators.required],
      titulo: ['',Validators.required],
      estado:['',Validators.required],
      descripcion:['',[Validators.required,Validators.maxLength(150)]]
    });
   }

  ngOnInit(): void {
    this.servicio.ConsultarDatos().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        if((datos[i].estado==1)||(datos[i].estado==2)){
          this.lista.push(datos[i]);
        }
        
        if(datos[i].estado==1){
          this.lista1.push(datos[i]);
        }
        if(datos[i].estado==2){
          this.lista2.push(datos[i]);
        }
        if(datos[i].estado==3){
          this.lista3.push(datos[i]);
        }
      }
      
    })
  }
  ModificarDatos(){
    let notaModificar:string;
    notaModificar=this.formulario.get('notaModificar')?.value;
    
    this.EliminarDatos(notaModificar);
    this.EnviarDatos();
  }

  EnviarDatos(){
    let nota1:Array<Notas>=[{ //Esto lo hice de esta manera, ya que no sabia como declarar un objeto de tipo de la interfaz Notas
      titulo:this.formulario.get('titulo')?.value,
      estado:this.formulario.get('estado')?.value,
      descripcion:this.formulario.get('descripcion')?.value
    }]

    console.log(nota1);
    this.servicio.GuardarDatos(nota1[0]).subscribe(notas=>{
      console.log(notas);
    });
    
    this.route.navigate(['/mostrar-notas']);
  }
  EliminarDatos(titulo:string){
    console.log(titulo);
    for(let i=0;i<this.lista.length;i++){
      if(this.lista[i].titulo==titulo){
        this.servicio.EliminarDatos(i).subscribe(datos=>{
          console.log(datos);
        })
      }
    }
  }
}
