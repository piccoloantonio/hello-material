import { Component } from '@angular/core';
import { ServizioProvaService } from '../servizio-prova.service';

@Component({
  selector: 'app-child2',
  standalone: true,
  imports: [],
  templateUrl: './child2.component.html',
  styleUrl: './child2.component.css'
})
export class Child2Component {
  //private servizio = new ServizioProvaService();
  constructor(private servizio: ServizioProvaService) { }

  nome = this.servizio.nome;
  cognome = this.servizio.getCognome();
}
