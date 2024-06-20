import { Component, Input } from '@angular/core';
import { Torneo } from '../../models/torneo';

@Component({
  selector: 'app-tarjeta-torneo',
  standalone: true,
  imports: [],
  templateUrl: './tarjeta-torneo.component.html',
  styleUrl: './tarjeta-torneo.component.sass'
})
export class TarjetaTorneoComponent {
  @Input() nombre:String = ""
  @Input() fechaInicio:Date = new Date("1970-01-01")
  @Input() fechaFinal:Date = new Date("1970-01-01")

  constructor(){
  }

  ngOnInit(){

  }
}
