import { stringify } from '@angular/compiler/src/util';
import { Component, OnInit } from '@angular/core';
import { Notas } from '../notas';
import { ServicioInfoService } from '../servicio-info.service';

@Component({
  selector: 'app-mostrar-notas',
  templateUrl: './mostrar-notas.component.html',
  styleUrls: ['./mostrar-notas.component.scss']
})
export class MostrarNotasComponent implements OnInit {
  lista:Array<Notas>=[];
  lista1:Array<Notas>=[];
  lista2:Array<Notas>=[];
  lista3:Array<Notas>=[];
  IndexNota:Array<Notas>=[];
  constructor(private servicio:ServicioInfoService) { }

  ngOnInit(): void {
    this.servicio.ConsultarDatos().subscribe(datos=>{
      for(let i=0;i<datos.length;i++){
        this.lista.push(datos[i]);
        console.log(this.lista[i]);
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
  // La funcion eliminar datos solo elimina datos por su titulo, esto es bastante poco efectivo,
  // lo ideal seria agregar un id para las notas, y que se eliminen en base a este.
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


