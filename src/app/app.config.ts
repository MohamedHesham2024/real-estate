import { ApplicationConfig, provideZoneChangeDetection,importProvidersFrom } from '@angular/core';
import { provideRouter } from '@angular/router';
import { provideAnimations } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr'
import { routes } from './app.routes';
import { TranslateModule, TranslateLoader } from '@ngx-translate/core';
import { TranslateHttpLoader } from '@ngx-translate/http-loader';
import { HttpClientModule, HttpClient } from '@angular/common/http';
import { provideHttpClient } from '@angular/common/http';

export function HttpLoaderFactory(http: HttpClient) {
  return new TranslateHttpLoader(http, './i18n/', '.json');
}
export const appConfig: ApplicationConfig = {
  providers: [provideZoneChangeDetection({ eventCoalescing: true }), provideRouter(routes),
     provideAnimations(),

    // ✅ استيراد ToastrModule بخصائصه
    importProvidersFrom(
         HttpClientModule,
      ToastrModule.forRoot({
        timeOut: 3000,
        positionClass: 'toast-top-right',
        preventDuplicates: true,
      }),
       TranslateModule.forRoot({
        defaultLanguage: 'en',
        loader: {
          provide: TranslateLoader,
          useFactory: HttpLoaderFactory,
          deps: [HttpClient],
        },
      })
    ),
     provideHttpClient()
  ]
};
