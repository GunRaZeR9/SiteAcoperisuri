import { Component, Input, Output, EventEmitter } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink, RouterLinkActive } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { LanguageSwitcherComponent } from '../language-switcher/language-switcher.component';

@Component({
  selector: 'app-mobile-nav',
  standalone: true,
  imports: [
    CommonModule,
    RouterLink,
    RouterLinkActive,
    TranslateModule,
    LanguageSwitcherComponent
  ],
  templateUrl: './mobile-nav.component.html',
  styleUrl: './mobile-nav.component.scss'
})
export class MobileNavComponent {
  @Input() isOpen = false;
  @Output() closeMenu = new EventEmitter<void>();

  navItems = [
    { path: '/', label: 'nav.home', exact: true },
    { path: '/servicii', label: 'nav.services', exact: false },
    { path: '/estimare-pret', label: 'nav.estimate', exact: false },
    { path: '/portofoliu', label: 'nav.portfolio', exact: false },
    { path: '/despre-noi', label: 'nav.about', exact: false },
    { path: '/contact', label: 'nav.contact', exact: false }
  ];

  onNavClick() {
    this.closeMenu.emit();
  }
}
