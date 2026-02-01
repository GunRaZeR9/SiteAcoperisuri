import { Component, inject, signal, OnInit, OnDestroy, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StatItemComponent } from './stat-item/stat-item.component';

export interface StatItem {
  id: string;
  value: number;
  suffix: string;
  labelKey: string;
  icon: string;
}

@Component({
  selector: 'app-stats-counter',
  standalone: true,
  imports: [CommonModule, TranslateModule, StatItemComponent],
  templateUrl: './stats-counter.component.html',
  styleUrl: './stats-counter.component.scss'
})
export class StatsCounterComponent implements OnInit, OnDestroy {
  private platformId = inject(PLATFORM_ID);
  private observer?: IntersectionObserver;
  
  isVisible = signal(false);

  stats: StatItem[] = [
    {
      id: 'years',
      value: 15,
      suffix: '+',
      labelKey: 'stats.years',
      icon: '📅'
    },
    {
      id: 'projects',
      value: 500,
      suffix: '+',
      labelKey: 'stats.projects',
      icon: '🏗️'
    },
    {
      id: 'satisfaction',
      value: 100,
      suffix: '%',
      labelKey: 'stats.satisfaction',
      icon: '⭐'
    }
  ];

  ngOnInit(): void {
    if (isPlatformBrowser(this.platformId)) {
      this.setupIntersectionObserver();
    }
  }

  ngOnDestroy(): void {
    this.observer?.disconnect();
  }

  private setupIntersectionObserver(): void {
    this.observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            this.isVisible.set(true);
            this.observer?.disconnect();
          }
        });
      },
      { threshold: 0.3 }
    );
  }

  onSectionRef(element: HTMLElement | null): void {
    if (element && this.observer) {
      this.observer.observe(element);
    }
  }
}
