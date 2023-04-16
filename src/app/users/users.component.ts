import { Component, computed, signal } from '@angular/core';
import { useFetch } from '../composables/fetch';
import { JsonPipe, NgFor, NgIf } from '@angular/common';

const baseUrl = 'https://jsonplaceholder.typicode.com/users/';

@Component({
  standalone: true,
  template: `
    Load post id:
    <button *ngFor="let i of buttons" (click)="id.set(i)">
      {{ i }}
    </button>
    <div *ngIf="fetch.error()">
      <p>Oops! Error encountered: {{ fetch.error()?.message }}</p>
      <button (click)="fetch.retry()">Retry</button>
    </div>
    <div *ngIf="fetch.data()">
      Data loaded:
      <pre>{{ fetch.data() | json }}</pre>
    </div>
  `,
  imports: [NgFor, JsonPipe, NgIf],
})
export class UsersComponent {
  buttons = [1, 2, 3, 4, 5];
  id = signal(1);
  url = computed(() => baseUrl + this.id());

  fetch = useFetch(this.url);
}
