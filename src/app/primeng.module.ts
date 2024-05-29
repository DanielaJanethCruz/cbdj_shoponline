import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';


//Módulos de PrimeNg
const  modPrime: any =[];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    modPrime
  ],
  exports:[
    modPrime
  ]
})
export class PrimengModule { }
