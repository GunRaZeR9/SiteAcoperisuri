import { Component, inject, signal, OnInit, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

type ConsentStatus = 'pending' | 'accepted' | 'declined';

@Component({
  selector: 'app-cookie-consent',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './cookie-consent.component.html',
  styleUrl: './cookie-consent.component.scss'
})
export class CookieConsentComponent implements OnInit {
  private platformId = inject(PLATFORM_ID);
  private readonly STORAGE_KEY = 'cookieConsent';

  isVisible = signal(false);
  consentStatus = signal<ConsentStatus>('pending');

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.checkConsentStatus();
    }
  }

  private checkConsentStatus(): void {
    const storedConsent = localStorage.getItem(this.STORAGE_KEY);
    
    if (storedConsent === 'accepted' || storedConsent === 'declined') {
      this.consentStatus.set(storedConsent);
      this.isVisible.set(false);
      
      if (storedConsent === 'accepted') {
        this.loadAnalytics();
      }
    } else {
      // Show banner after a short delay for better UX
      setTimeout(() => {
        this.isVisible.set(true);
      }, 1000);
    }
  }

  acceptCookies(): void {
    this.setConsent('accepted');
    this.loadAnalytics();
  }

  declineCookies(): void {
    this.setConsent('declined');
  }

  private setConsent(status: 'accepted' | 'declined'): void {
    if (isPlatformBrowser(this.platformId)) {
      localStorage.setItem(this.STORAGE_KEY, status);
    }
    this.consentStatus.set(status);
    this.isVisible.set(false);
  }

  private loadAnalytics(): void {
    // Google Tag Manager will be loaded here when consent is given
    // This is where you would initialize GTM after user accepts cookies
    if (isPlatformBrowser(this.platformId)) {
      console.log('Analytics consent granted - GTM would be loaded here');
      // Uncomment and configure when ready to add GTM:
      // this.loadGoogleTagManager('GTM-XXXXXXX');
    }
  }

  // Placeholder for GTM loading - configure with actual GTM ID when ready
  private loadGoogleTagManager(gtmId: string): void {
    const script = document.createElement('script');
    script.innerHTML = `
      (function(w,d,s,l,i){w[l]=w[l]||[];w[l].push({'gtm.start':
      new Date().getTime(),event:'gtm.js'});var f=d.getElementsByTagName(s)[0],
      j=d.createElement(s),dl=l!='dataLayer'?'&l='+l:'';j.async=true;j.src=
      'https://www.googletagmanager.com/gtm.js?id='+i+dl;f.parentNode.insertBefore(j,f);
      })(window,document,'script','dataLayer','${gtmId}');
    `;
    document.head.appendChild(script);
  }
}
