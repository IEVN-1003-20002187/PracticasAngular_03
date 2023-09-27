import { Component } from '@angular/core';

@Component({
  selector: 'app-operas-bas',
  templateUrl: './operas-bas.component.html',
  styleUrls: ['./operas-bas.component.css']
})
export class OperasBasComponent {
  num1 ="";
  num2 = "";
  resultado: number = 0;
  calculo: string = 'sum';
 

  calcular() {
    switch (this.calculo) {
      case 'sum':
        this.resultado = parseInt(this.num1) + parseInt(this.num2);
        break;
      case 'res':
        this.resultado = parseInt(this.num1) - parseInt(this.num2);11
        break;
      case 'multi':
        this.resultado = parseInt(this.num1) * parseInt(this.num2);
        break;
      case 'div':
        this.resultado = parseInt(this.num1) / parseInt(this.num2);
        break;
      case 'porce':
          this.resultado = parseInt(this.num1) % parseInt(this.num2);      
}
}
}
