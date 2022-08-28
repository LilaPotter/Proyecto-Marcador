import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-equipo',
  templateUrl: './equipo.component.html',
  styleUrls: ['./equipo.component.css']
})
export class EquipoComponent implements OnInit {

  @Input() equipo: any;
  @Output() canasta: EventEmitter<any> = new EventEmitter;

  constructor() { }

  ngOnInit(): void {
  }

  setCanasta(puntos: number, nombreJugador: string): void{
    this.canasta.emit({
      puntos,
      nombreJugador
    })
  }
}
