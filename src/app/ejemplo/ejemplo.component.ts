import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-ejemplo',
  templateUrl: './ejemplo.component.html',
  styleUrls: ['./ejemplo.component.scss']
})
export class EjemploComponent implements OnInit {

  contador = 0

  constructor() { }

  ngOnInit() {
    console.log("hola mundo")
  }

  aumentar() {
    this.contador++
  }

  disminuir() {
    this.contador--
  }

}
