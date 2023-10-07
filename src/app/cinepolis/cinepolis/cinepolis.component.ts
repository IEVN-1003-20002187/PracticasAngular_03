import { Component } from '@angular/core';


@Component({
  selector: 'app-cinepolis',
  templateUrl: './cinepolis.component.html',
  styleUrls: ['./cinepolis.component.css'],
})
export class CinepolisComponent {
  numBol: number = 0;
  cantComp: number = 0;
  descAdi: number = 0;
  total: number = 0;
  tarjetas: string = '';
  descTarj: number = 0;
  nombre: string = '';
  Subtotal: number = 0;
  precioUni: number = 12;
  descuentoinicial: number = 0;
  descuentotarjeta: number = 0;
  descuentoTotal: number = 0;


  limite(): void {
    const maxBolP = this.cantComp * 7;

    if (this.numBol > maxBolP) {
      alert('Solo se pueden vender máximo ' + maxBolP + ' boletos por persona.');
      this.numBol = 0;
      window.location.reload();
    }

  }


  calcular(): number {
    this.Subtotal = this.numBol * this.precioUni;
    if (this.numBol >= 5) { //si el cliente adquiere 5 o más boletos
      this.descAdi = 15; //se aplica un 15% de descuento en su compra
      this.descuentoinicial = this.Subtotal * (this.descAdi / 100); //calcula el descuento por boletos
      this.descuentoTotal = this.Subtotal - this.descuentoinicial; //da el primer precio final con descuento por boletos
      if (this.tarjetas == '1') { //si el cliente tiene tarjeta
        this.descTarj = 10; //se aplica 10% de descuento sobre el descuento inicial
        this.descuentotarjeta = this.descuentoTotal * (this.descTarj / 100); //se calcula el descuento a realizar sobre el 1er precio a pagar
        this.total = this.descuentoTotal - this.descuentotarjeta; //se arroja el precio definitivo
      }
      else
      this.total = this.descuentoTotal;
      return this.total;
    } else if (this.numBol >= 3) {
      this.descAdi = 10;
      this.descuentoinicial = this.Subtotal * (this.descAdi / 100); //calcula el descuento por boletos
      this.descuentoTotal = this.Subtotal - this.descuentoinicial; //da el primer precio final con descuento por boletos
      if (this.tarjetas == '1') { //si el cliente tiene tarjeta
        this.descTarj = 10; //se aplica 10% de descuento sobre el descuento inicial
        this.descuentotarjeta = this.descuentoTotal * (this.descTarj / 100); //se calcula el descuento a realizar sobre el 1er precio a pagar
        this.total = this.descuentoTotal - this.descuentotarjeta; //se arroja el precio definitivo
      }
      else
      this.total = this.descuentoTotal;
      return this.total;
    } else if (this.numBol <= 2) {
      if (this.tarjetas == '1') { //si el cliente tiene tarjeta
        this.descTarj = 10; //se aplica 10% de descuento sobre el descuento inicial
        this.descuentotarjeta = this.Subtotal * (this.descTarj / 100); //se calcula el descuento a realizar sobre el 1er precio a pagar
        this.total = this.Subtotal - this.descuentotarjeta; //se arroja el precio definitivo
      }
      else
      this.total = this.Subtotal;
      return this.total;
    }
    const neto = this.total;
    return neto;

  }

  salirYRecargar() {
    window.location.reload();  // Recarga la página
  }

 
}


//   nombre: string = '';
//   totalBoletas: number = 0;
//   compradores:number = 0;
//   mensaje:string='';
//   tieneTarjeta: string = '';
//   descuento: number = 0;
//   descuentoCineco: number = 0;
//   descuentoCalculado: boolean= false;
//   mensajerror: boolean = false;
//   SubT: number= 0;
//   precioTotal:number=0;
//   totalfin:number=0;
//   cant:number =0;
//   precioBoleto: number=12;
//   descuentoBo: number= 0;


//   limite(): void{
//     const limite= this.compradores* 7;
//     if(this,this.totalBoletas > limite){
//       alert('exediste del numero de boletos a comprar que es '  + limite);
//       this.totalBoletas = 0;
//       window.location.reload();

//     }
//   }



 


// calcular(){
//      if(this.compradores <= this.totalBoletas * 7){
//        this.submitForm();
//        this.calcularPrecio();
//      }
//      else if(this.compradores > this.totalBoletas * 7){
//   this.mensaje = "Obtuvo un 10% de descuento por tener la tarjeta";
//   this.mensajerror = true;
//   this.descuentoCalculado = false;
//      }

//    }

//    submitForm() {
//      if (this.totalBoletas >= 5) {
//        this.descuento = 15;
//      } else if (this.totalBoletas >= 3) {
//        this.descuento = 10;
//      } else {
//        this.descuento = 0;
//      }

//      if (this.tieneTarjeta == 'si') {
//        this.descuentoCineco = 0.1;
//      } else if (this.tieneTarjeta == 'no'){
//        this.descuentoCineco = 0;
//      }
//      this.descuentoCalculado = true;
//      this.mensajerror = false;
//      return this.descuento;
//    }

  


// calcularPrecio(): number  {

//  const precioPorBoleta = 12;
//  this.precioTotal = this.totalBoletas * precioPorBoleta;

//  const descuentoBoletos = this.precioTotal * ((this.descuento) / 100);


//  if (this.tieneTarjeta == 'si') {
//      this.precioTotal -= descuentoBoletos;
//      this.precioTotal -= (this.precioTotal * this.descuentoCineco);
//      this.mensaje= "Obtuvo un 10% de descuento por tener la tarjeta"
//  } else if (this.tieneTarjeta == 'no'){
//    this.precioTotal -= descuentoBoletos;
//  }
//  return this.precioTotal;

//  }





