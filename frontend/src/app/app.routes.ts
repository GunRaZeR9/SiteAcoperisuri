import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: '',
    loadComponent: () => import('./pages/home/home.component').then(m => m.HomeComponent),
    title: 'Acoperișuri Profesionale | Servicii Complete de Acoperiș'
  },
  {
    path: 'servicii',
    loadComponent: () => import('./pages/services/services-list.component').then(m => m.ServicesListComponent),
    title: 'Servicii | Acoperișuri Profesionale'
  },
  {
    path: 'servicii/:slug',
    loadComponent: () => import('./pages/services/service-detail.component').then(m => m.ServiceDetailComponent),
    title: 'Detalii Serviciu | Acoperișuri Profesionale'
  },
  {
    path: 'portofoliu',
    loadComponent: () => import('./pages/portfolio/portfolio.component').then(m => m.PortfolioComponent),
    title: 'Portofoliu | Acoperișuri Profesionale'
  },
  {
    path: 'despre-noi',
    loadComponent: () => import('./pages/about/about.component').then(m => m.AboutComponent),
    title: 'Despre Noi | Acoperișuri Profesionale'
  },
  {
    path: 'contact',
    loadComponent: () => import('./pages/contact/contact.component').then(m => m.ContactComponent),
    title: 'Contact | Acoperișuri Profesionale'
  },
  {
    path: 'estimare-pret',
    loadComponent: () => import('./pages/estimate/estimate.component').then(m => m.EstimateComponent),
    title: 'Estimare Preț | Acoperișuri Profesionale'
  },
  {
    path: 'politica-cookies',
    loadComponent: () => import('./pages/cookie-policy/cookie-policy.component').then(m => m.CookiePolicyComponent),
    title: 'Politica de Cookie-uri | Acoperișuri Profesionale'
  },
  {
    path: 'termeni-si-conditii',
    loadComponent: () => import('./pages/terms/terms.component').then(m => m.TermsComponent),
    title: 'Termeni și Condiții | Acoperișuri Profesionale'
  },
  {
    path: '**',
    redirectTo: ''
  }
];
