import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ServizioProvaService {
  nome = "giuseppe";
  private cognome = "verdi";

  getCognome() {
    return this.cognome;
  }
}
