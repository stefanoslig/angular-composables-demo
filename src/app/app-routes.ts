import { Route } from '@angular/router';
import { StudentsComponent } from './students/students.component';
import { TeachersComponent } from './teachers/teachers.component';

export const appRoutes: Route[] = [
  { path: '', redirectTo: '/students', pathMatch: 'full' },
  { path: 'students', component: StudentsComponent },
  { path: 'teachers', component: TeachersComponent },
];
