import { Component } from '@angular/core';
import { useLocalStorage } from '../composables/storage';
import { FormControl, ReactiveFormsModule } from '@angular/forms';

@Component({
  standalone: true,
  template: `
    <button (click)="useTheme('Dark')">Use dark theme</button>
    <button (click)="useTheme('Light')">Use light theme</button>

    <p>Stored used: {{ storage.value() }}</p>
  `,
})
export class LocalStorageComponent {
  storage = useLocalStorage('theme');

  useTheme(theme: 'Dark' | 'Light') {
    this.storage.value.set(theme)
  }
}
