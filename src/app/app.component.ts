import { Component } from '@angular/core';
import { RouterLink, RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink],
  template: `
    <header>
      <a routerLink="/students">Students</a> |
      <a routerLink="/teachers">Teachers</a>
    </header>
    <router-outlet></router-outlet>
  `,
})
export class AppComponent {
  title = 'angular-composables-demo';
}
