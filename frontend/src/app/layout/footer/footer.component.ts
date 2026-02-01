import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-footer',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './footer.component.html',
  styleUrl: './footer.component.scss'
})
export class FooterComponent {
  currentYear = new Date().getFullYear();

  services = [
    { path: '/servicii/acoperisuri', label: 'services.roofing.title' },
    { path: '/servicii/reparatii', label: 'services.repairs.title' },
    { path: '/servicii/renovare', label: 'services.renovation.title' },
    { path: '/servicii/hidroizolatii', label: 'services.waterproofing.title' },
    { path: '/servicii/dulgherie', label: 'services.carpentry.title' },
    { path: '/servicii/mansardare', label: 'services.attic.title' }
  ];

  usefulLinks = [
    { path: '/', label: 'nav.home' },
    { path: '/despre-noi', label: 'nav.about' },
    { path: '/portofoliu', label: 'nav.portfolio' },
    { path: '/estimare-pret', label: 'nav.estimate' },
    { path: '/contact', label: 'nav.contact' }
  ];

  legalLinks = [
    { path: '/politica-cookies', label: 'footer.cookies' },
    { path: '/termeni-conditii', label: 'footer.terms' }
  ];
}
