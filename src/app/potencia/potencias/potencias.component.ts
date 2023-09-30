import { Component } from '@angular/core';

@Component({
  selector: 'app-potencias',
  templateUrl: './potencias.component.html',
  styleUrls: ['./potencias.component.css']
})
export class PotenciasComponent {
  num1:number = 0;
  num2:number = 0;
  resultadoS:number = 0;
  resultadoC: string = '';

  calcular() {
    this.resultadoC = '';
    this.resultadoS = 0;

    for (let i = 0; i < this.num2; i++) {
      this.resultadoS += this.num1;
      this.resultadoC += this.num1.toString();
      if (i < this.num2 - 1) {
        this.resultadoC +='+';
}
}
}



}

