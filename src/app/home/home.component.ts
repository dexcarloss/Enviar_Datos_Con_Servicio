import { Component, OnInit } from '@angular/core';
import { DbdataService } from '../servicios/dbdata.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  constructor(public dbdata:DbdataService) { }
  public datosObtenidos:Array<any>=[];
  ngOnInit(): void {
    this.dbdata.enviarDatos.subscribe((datos: any[])=>{
      this.datosObtenidos=datos
      console.log(this.datosObtenidos)
    })
   
  }

}
