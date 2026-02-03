import { Injectable, inject } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { Router, NavigationEnd } from '@angular/router';
import { filter } from 'rxjs/operators';

export interface SEOConfig {
  title: string;
  description: string;
  keywords?: string;
  image?: string;
  url?: string;
  type?: string;
  author?: string;
  locale?: string;
}

@Injectable({
  providedIn: 'root'
})
export class SeoService {
  private meta = inject(Meta);
  private titleService = inject(Title);
  private router = inject(Router);

  private defaultConfig: SEOConfig = {
    title: 'Acoperișuri Profesionale | Servicii Complete de Acoperiș în România',
    description: 'Servicii profesionale de montaj, reparații și întreținere acoperișuri. Peste 15 ani de experiență, materiale premium și garanție 10 ani. Solicită estimare gratuită!',
    keywords: 'acoperișuri, montaj acoperiș, reparații acoperiș, renovare acoperiș, hidroizolații, șarpante, mansardări, București, România',
    image: 'https://caseacoperisuriro.com/images/logo_acoperisuri_case.png',
    url: 'https://caseacoperisuriro.com/',
    type: 'website',
    author: 'Acoperișuri Profesionale',
    locale: 'ro_RO'
  };

  constructor() {
    this.setupRouteListener();
  }

  private setupRouteListener(): void {
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe(() => {
        // Update canonical URL on route change
        this.updateCanonicalUrl();
      });
  }

  updateMetaTags(config: Partial<SEOConfig>): void {
    const seoConfig = { ...this.defaultConfig, ...config };
    
    // Update title
    this.titleService.setTitle(seoConfig.title);
    
    // Update basic meta tags
    this.meta.updateTag({ name: 'description', content: seoConfig.description });
    if (seoConfig.keywords) {
      this.meta.updateTag({ name: 'keywords', content: seoConfig.keywords });
    }
    if (seoConfig.author) {
      this.meta.updateTag({ name: 'author', content: seoConfig.author });
    }
    
    // Update Open Graph meta tags
    this.meta.updateTag({ property: 'og:title', content: seoConfig.title });
    this.meta.updateTag({ property: 'og:description', content: seoConfig.description });
    this.meta.updateTag({ property: 'og:type', content: seoConfig.type || 'website' });
    if (seoConfig.url) {
      this.meta.updateTag({ property: 'og:url', content: seoConfig.url });
    }
    if (seoConfig.image) {
      this.meta.updateTag({ property: 'og:image', content: seoConfig.image });
    }
    if (seoConfig.locale) {
      this.meta.updateTag({ property: 'og:locale', content: seoConfig.locale });
    }
    
    // Update Twitter Card meta tags
    this.meta.updateTag({ name: 'twitter:card', content: 'summary_large_image' });
    this.meta.updateTag({ name: 'twitter:title', content: seoConfig.title });
    this.meta.updateTag({ name: 'twitter:description', content: seoConfig.description });
    if (seoConfig.url) {
      this.meta.updateTag({ name: 'twitter:url', content: seoConfig.url });
    }
    if (seoConfig.image) {
      this.meta.updateTag({ name: 'twitter:image', content: seoConfig.image });
    }
  }

  private updateCanonicalUrl(): void {
    const url = `https://caseacoperisuriro.com${this.router.url}`;
    let link: HTMLLinkElement | null = document.querySelector("link[rel='canonical']");
    
    if (link) {
      link.setAttribute('href', url);
    } else {
      link = document.createElement('link');
      link.setAttribute('rel', 'canonical');
      link.setAttribute('href', url);
      document.head.appendChild(link);
    }
  }

  addStructuredData(data: any): void {
    let script: HTMLScriptElement | null = document.querySelector('script[type="application/ld+json"]');
    
    if (!script) {
      script = document.createElement('script');
      script.type = 'application/ld+json';
      document.head.appendChild(script);
    }
    
    script.textContent = JSON.stringify(data);
  }

  // Helper method to create breadcrumb structured data
  createBreadcrumbStructuredData(items: { name: string; url: string }[]): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'BreadcrumbList',
      itemListElement: items.map((item, index) => ({
        '@type': 'ListItem',
        position: index + 1,
        name: item.name,
        item: item.url
      }))
    };
  }

  // Helper method to create FAQ structured data
  createFAQStructuredData(faqs: { question: string; answer: string }[]): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: faqs.map(faq => ({
        '@type': 'Question',
        name: faq.question,
        acceptedAnswer: {
          '@type': 'Answer',
          text: faq.answer
        }
      }))
    };
  }

  // Helper method to create Service structured data
  createServiceStructuredData(service: {
    name: string;
    description: string;
    provider: string;
    areaServed?: string;
    image?: string;
  }): any {
    return {
      '@context': 'https://schema.org',
      '@type': 'Service',
      name: service.name,
      description: service.description,
      provider: {
        '@type': 'LocalBusiness',
        name: service.provider
      },
      areaServed: service.areaServed || 'România',
      image: service.image
    };
  }
}
