import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-test',
  standalone: true,
  imports: [],
  templateUrl: './test.component.html',
  styleUrl: './test.component.css'
})
export class TestComponent {
  @Input() in: any; // da parent a child

  @Output() out = new EventEmitter<string>(); // da child a parent
  cognome = "pluto";

  invia() {
    this.out.emit(this.cognome);
  }

}
