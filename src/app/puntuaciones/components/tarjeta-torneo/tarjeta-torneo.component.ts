import { Component, Input } from '@angular/core';
import { Torneo } from '../../../shared/models/torneo';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'app-tarjeta-torneo',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './tarjeta-torneo.component.html',
  styleUrl: './tarjeta-torneo.component.sass'
})
export class TarjetaTorneoComponent {
  @Input() id:Number = 1
  @Input() nombre:String = ""
  @Input() fechaInicio:String = ""
  @Input() fechaFinal:String = ""
  @Input() usuario?:String = ""

  constructor(){
  }

  ngOnInit(){

  }
}
