import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { DbdataService } from './../servicios/dbdata.service';

@Component({
  selector: 'app-principal',
  templateUrl: './principal.component.html',
  styleUrls: ['./principal.component.scss']
})
export class PrincipalComponent implements OnInit {

public datos="hola"

  constructor(public dbdata:DbdataService,     private router: Router,) { }

  ngOnInit(): void {
  }

  enviar(){
    this.router.navigate(['/home'])

    this.dbdata.enviarDatos.emit(this.datos);
  }

}
