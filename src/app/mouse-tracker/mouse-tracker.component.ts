import { Component, isSignal } from '@angular/core';
import { useMouse } from '../composables/mouse-tracker';

@Component({
  standalone: true,
  template: ` {{ mouse.x() }} {{ mouse.y() }} `,
})
export class MouseTrackerComponent {
  mouse = useMouse();
}
