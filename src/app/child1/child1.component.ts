import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-child1',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './child1.component.html',
  styleUrl: './child1.component.css'
})
export class Child1Component {
  test = true;

  setTest(valore: boolean) {
    this.test = valore;
  }

  getTest(): boolean {
    return this.test;
  }


}
