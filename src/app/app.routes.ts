import { Routes } from '@angular/router';
import { Pagina1Component } from './pagina1/pagina1.component';
import { Pagina2Component } from './pagina2/pagina2.component';
import { Child1Component } from './child1/child1.component';
import { Child2Component } from './child2/child2.component';
import { HomeComponent } from './home/home.component';
import { Pagina3Component } from './pagina3/pagina3.component';

export const routes: Routes = [
    { path: '', component: HomeComponent },
    { path: 'pagina1', component: Pagina1Component },
    {
        path: 'pagina2', component: Pagina2Component, children: [
            { path: '', redirectTo: 'child1', pathMatch: 'full' },
            { path: "child1", component: Child1Component },
            { path: "child2", component: Child2Component }
        ]
    },
    { path: 'pagina3', component: Pagina3Component }
];
