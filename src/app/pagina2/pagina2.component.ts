import { Component } from '@angular/core';
import { MatSidenavModule } from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-pagina2',
  standalone: true,
  imports: [MatSidenavModule, MatListModule, RouterLink, RouterOutlet],
  templateUrl: './pagina2.component.html',
  styleUrl: './pagina2.component.css'
})
export class Pagina2Component {
  passaggioDati = "da parent a child";

}
