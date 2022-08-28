import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-marcador2',
  templateUrl: './marcador2.component.html',
  styleUrls: ['./marcador2.component.css']
})
export class Marcador2Component implements OnInit {

  puntosLocales: number = 0;
  puntosVisitantes: number = 0;

  equipoLocal: any = {
    nombre: 'lakers',
    logo: '/assets/img/LAL.png',
    jugadores: [
      {nombre: 'Isaiah Thomas', puntos: 0, imagen: '/assets/img/thomas.png' },
      {nombre: 'Kyle Kuzuma', puntos: 0, imagen: '/assets/img/kuzma.png' },
      {nombre: 'Julius Randle', puntos: 0, imagen: '/assets/img/randle.png' },
      {nombre: 'Brandon Ingram', puntos: 0, imagen: '/assets/img/ingram.png' },
      {nombre: 'Brooke Lopez', puntos: 0, imagen: '/assets/img/lopez.png' },
    ]
  }
  equipoVisitante: any = {
    nombre: 'celtics',
    logo: '/assets/img/BOS.png',
    jugadores: [
      {nombre: 'Kadeem Allen', puntos: 0, imagen: '/assets/img/allen.png' },
      {nombre: 'Aaron Bynes', puntos: 0, imagen: '/assets/img/bynes.png' },
      {nombre: 'Jabari Bird', puntos: 0, imagen: '/assets/img/bird.png' },
      {nombre: 'Jaylen Brown', puntos: 0, imagen: '/assets/img/brown.png' },
      {nombre: 'Jonathan Gibson', puntos: 0, imagen: '/assets/img/gibson.png' },
    ]
  }

  constructor() { }

  ngOnInit(): void {
  }
    //Con esto se actualizan los puntos
  getCanastaLocal($event: any): void {
    this.puntosLocales += $event.puntos;
    this.equipoLocal.jugadores.forEach((elem: any)=>{
      if(elem.nombre === $event.nombreJugador){
        elem.puntos += $event.puntos
      }
    });
  }
  getCanastaVisitante($event: any): void {
    this.puntosVisitantes += $event.puntos;
    this.equipoVisitante.jugadores.forEach((elem: any)=>{
      if(elem.nombre === $event.nombreJugador){
        elem.puntos += $event.puntos
      }
    });
  }
}
