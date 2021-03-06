import { Component } from '@angular/core';
import { Empleado } from './empleado.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent {
  titulo = 'Listado de Empleados';

  empleados:Empleado[] = [
    new Empleado("Juan","Díaz","Presidente",7500),
    new Empleado("Ana","Martín","Directora",7500),
    new Empleado("María","Fernandez","Jefa sección",7500),
    new Empleado("Laura","López","Administrativo",7500),
  ];

  agregarEmpleado(){
    let miEmpleado=new Empleado(this.cuadroNombre, this.cuadroApellido, this.cuadroCargo, this.cuadroSalario);
    this.empleados.push(miEmpleado);
  }

  cuadroNombre:string="";
  cuadroApellido:string="";
  cuadroCargo:string="";
  cuadroSalario:number=0;

}
