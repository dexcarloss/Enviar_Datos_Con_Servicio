import { Injectable,Output, EventEmitter } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class DbdataService {

  constructor() { }

  @Output()enviarDatos:EventEmitter<any>=new EventEmitter<any>();
  
}
