import { mergeApplicationConfig, ApplicationConfig } from '@angular/core';
import { provideServerRendering, withRoutes } from '@angular/ssr';
import { provideHttpClient, withFetch } from '@angular/common/http';
import { appConfig } from './app.config';
import { serverRoutes } from './app.routes.server';
import { TranslateLoader } from '@ngx-translate/core';
import { Observable, of } from 'rxjs';

// Server-side translation loader that returns empty translations
// This prevents HTTP requests during SSR
// Translations will be loaded on the client side after hydration
class ServerTranslateLoader implements TranslateLoader {
  getTranslation(lang: string): Observable<any> {
    return of({});
  }
}

const serverConfig: ApplicationConfig = {
  providers: [
    provideServerRendering(withRoutes(serverRoutes)),
    provideHttpClient(withFetch()),
    {
      provide: TranslateLoader,
      useClass: ServerTranslateLoader
    }
  ]
};

export const config = mergeApplicationConfig(appConfig, serverConfig);
