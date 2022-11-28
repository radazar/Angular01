import { NumberFormatStyle } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-servicios',
  templateUrl: './servicios.component.html',
  styleUrls: ['./servicios.component.css']
})
export class ServiciosComponent {
    miami:number=851773;
    newy:number=1063582;
    cairo:number=8153660;
    buenos:number=3123530;
    atenas:number=6600990;
    roma:number=4678927;
    estanbul:number=4980896;
    calafate:number=4091837;
    yell:number=4507001;

    most:any;
    city:any;

    dest1:string='Miami';
    dest2:string='New York';
    dest3:string='El Cairo';
    dest4:string='Buenos Aires';
    dest5:string='Atenas';
    dest6:string='Roma';
    dest7:string='Estanbul';
    dest8:string='El Calafate';
    dest9:string='Yellowstone';

    MostrarM(){
      this.most=this.miami;
      this.city=this.dest1;
    }
    MostrarNY(){
      this.most=this.newy;
      this.city=this.dest2;
    }
    MostrarC(){
      this.most=this.cairo;
      this.city=this.dest3;
    }
    MostrarBA(){
      this.most=this.buenos;
      this.city=this.dest4;
    }
    MostrarA(){
      this.most=this.atenas;
      this.city=this.dest5;
    }
    MostrarR(){
      this.most=this.roma;
      this.city=this.dest6;
    }
    MostrarE(){
      this.most=this.estanbul;
      this.city=this.dest7;
    }
    MostrarCF(){
      this.most=this.calafate;
      this.city=this.dest8;
    }
    MostrarY(){
      this.most=this.yell;
      this.city=this.dest9;
    }
}

