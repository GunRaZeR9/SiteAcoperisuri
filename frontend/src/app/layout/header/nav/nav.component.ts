import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-nav',
  standalone: true,
  imports: [CommonModule, RouterLink, RouterLinkActive, TranslateModule],
  templateUrl: './nav.component.html',
  styleUrl: './nav.component.scss'
})
export class NavComponent {
  navItems = [
    { path: '/', label: 'nav.home', exact: true },
    { path: '/servicii', label: 'nav.services', exact: false },
    { path: '/portofoliu', label: 'nav.portfolio', exact: false },
    { path: '/despre-noi', label: 'nav.about', exact: false },
    { path: '/contact', label: 'nav.contact', exact: false }
  ];
}
