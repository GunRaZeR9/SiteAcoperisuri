import { Component, inject, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateService, TranslateModule } from '@ngx-translate/core';

@Component({
  selector: 'app-language-switcher',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './language-switcher.component.html',
  styleUrl: './language-switcher.component.scss'
})
export class LanguageSwitcherComponent {
  private translate = inject(TranslateService);
  
  @Input() showLabels = false;

  languages = [
    { code: 'ro', label: 'RO', fullLabel: 'Română', flag: '🇷🇴' },
    { code: 'en', label: 'EN', fullLabel: 'English', flag: '🇬🇧' },
    { code: 'hu', label: 'HU', fullLabel: 'Magyar', flag: '🇭🇺' }
  ];

  get currentLang(): string {
    return this.translate.currentLang || 'ro';
  }

  switchLanguage(lang: string): void {
    this.translate.use(lang).subscribe({
      next: () => {
        console.log(`Language switched to ${lang}`);
        if (typeof localStorage !== 'undefined') {
          localStorage.setItem('language', lang);
        }
      },
      error: (err) => console.error(`Error switching to ${lang}:`, err)
    });
  }
}
