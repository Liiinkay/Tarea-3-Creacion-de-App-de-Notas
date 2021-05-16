import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Notas } from './notas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioInfoService {
  url:string="http://localhost/Backend/";
  constructor(private servicio:HttpClient) { }

  GuardarDatos(Nota:any):Observable<any>{ // Recibe un objeto de tipo Nota
    console.log(Nota);
    return this.servicio.post(`${this.url}guardar.php`,JSON.stringify(Nota));
  }
  ConsultarDatos():Observable<any>{
    return this.servicio.get(`${this.url}notas.php`);
  }
  EliminarDatos(Item:any):Observable<any>{ // Recibe index/item de la lista
    console.log(Item);
    return this.servicio.post(`${this.url}eliminar.php`,JSON.stringify(Item));
  }
  ModificarDatos(Lista:any):Observable<any>{ // Recibe Lista con Index y El objeto de tipo Nota a remplazar
    console.log(Lista);
    return this.servicio.post(`${this.url}eliminar.php`,JSON.stringify(Lista));
  }
}
