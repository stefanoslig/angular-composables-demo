import { bootstrapApplication } from '@angular/platform-browser';
import { provideRouter } from '@angular/router';
import { appRoutes } from './app/app-routes';
import { AppComponent } from './app/app.component';

bootstrapApplication(AppComponent, {
  providers: [provideRouter(appRoutes)],
});
