import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-top-score',
  templateUrl: './top-score.component.html',
  styleUrls: ['./top-score.component.css']
})
export class TopScoreComponent implements OnInit {

  @Input() equipoLocal: any;
  @Input() equipoVisitante: any;
  jugadores: any=[];

  constructor() { }

  ngOnInit(): void {
    this.jugadores = [...this.equipoLocal.jugadores, ...this.equipoVisitante.jugadores]
  }

  ngAfterContentChecked(): void {
    //Called after every check of the component's or directive's content.
    //Add 'implements AfterContentChecked' to the class.
    this.sortJugadores();
  }
  sortJugadores() {
    this.jugadores.sort((a: any, b:any)=> {
      return (b.puntos - a.puntos);
    })
  }
}
