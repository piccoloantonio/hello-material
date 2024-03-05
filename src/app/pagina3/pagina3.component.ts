import { Component, ElementRef, ViewChild } from '@angular/core';
import { MatSelectModule } from '@angular/material/select';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatButtonModule } from '@angular/material/button';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-pagina3',
  standalone: true,
  imports: [FormsModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatButtonModule],
  templateUrl: './pagina3.component.html',
  styleUrl: './pagina3.component.css'
})
export class Pagina3Component {
  @ViewChild("form") form2: any;
  @ViewChild("risultato") div!: ElementRef<HTMLDivElement>;

  nome = "";
  cognome = "";
  sesso = "";

  onSubmit(form: NgForm) {
    console.log(form.value);
    console.log(this.form2.value);
    this.nome = form.value.nome;
    this.cognome = form.value.cognome;
    this.sesso = form.value.sesso;
    this.div.nativeElement.style.display = 'block';
  }

}
