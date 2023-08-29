import { Component } from '@angular/core';
import { ThisReceiver } from '@angular/compiler';
import { Farm } from './farms';
import { FarmService } from './farms.service';

@Component({
  selector: 'app-farms',
  templateUrl: './farms.component.html',
  styleUrls: ['./farms.component.css']
})
export class FarmsComponent {
  farms: Farm[] = [];

  //Así se inyecta la dependencia: 
  constructor(private farmService: FarmService){}

  ngOnInit(){ 
    //acá se llama al método del Service
    this.farmService.getFarms().subscribe(
      //Ahora el resultado de llamar al service se almacena en clientes
      // Y después le asignamos a la variable de este file (this.clientes) el valor
      //que tiene el resultado clientes. 
      farms => this.farms = farms
      //Esto es una función anonima, clientes sería el argumento que le pasa a la función
      
      //Sería lo mismo que hacer:
      //function (clientes){this.clientes = clientes}
    );
  
  }
}
