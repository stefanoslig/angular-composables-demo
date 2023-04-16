import { Route } from '@angular/router';
import { MouseTrackerComponent } from './mouse-tracker/mouse-tracker.component';
import { UsersComponent } from './users/users.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/mouse-tracker', pathMatch: 'full' },
  { path: 'mouse-tracker', component: MouseTrackerComponent },
  { path: 'users', component: UsersComponent },
];
