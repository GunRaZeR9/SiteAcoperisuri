import { Component, inject, signal, PLATFORM_ID, OnInit } from '@angular/core';
import { isPlatformBrowser } from '@angular/common';
import { RouterOutlet } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { HeaderComponent } from './layout/header/header.component';
import { FooterComponent } from './layout/footer/footer.component';
import { CookieConsentComponent } from './layout/cookie-consent/cookie-consent.component';

@Component({
  selector: 'app-root',
  imports: [
    RouterOutlet, 
    HeaderComponent, 
    FooterComponent,
    CookieConsentComponent
  ],
  templateUrl: './app.html',
  styleUrl: './app.scss'
})
export class App implements OnInit {
  private translate = inject(TranslateService);
  private platformId = inject(PLATFORM_ID);

  protected readonly title = signal('Acoperișuri Profesionale');

  constructor() {
    this.translate.addLangs(['ro', 'en', 'hu']);
    
    // Only set default language in browser to avoid loading empty SSR translations
    if (isPlatformBrowser(this.platformId)) {
      this.translate.setDefaultLang('ro');
    }
  }

  ngOnInit(): void {
    // Only load translations in the browser, not during SSR
    if (isPlatformBrowser(this.platformId)) {
      const savedLang = localStorage.getItem('language');
      const langToUse = (savedLang && ['ro', 'en', 'hu'].includes(savedLang)) ? savedLang : 'ro';
      
      // Force reload translations in browser
      this.translate.use(langToUse).subscribe({
        next: () => console.log(`Translations loaded for ${langToUse}`),
        error: (err) => console.error('Error loading translations:', err)
      });
    }
  }

  switchLang(lang: string): void {
    this.translate.use(lang);
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem('language', lang);
    }
  }
}
