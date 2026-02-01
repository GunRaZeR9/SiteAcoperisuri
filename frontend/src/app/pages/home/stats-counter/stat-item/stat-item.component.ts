import { Component, Input, OnChanges, SimpleChanges, signal, inject, PLATFORM_ID } from '@angular/core';
import { CommonModule, isPlatformBrowser } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { StatItem } from '../stats-counter.component';

@Component({
  selector: 'app-stat-item',
  standalone: true,
  imports: [CommonModule, TranslateModule],
  templateUrl: './stat-item.component.html',
  styleUrl: './stat-item.component.scss'
})
export class StatItemComponent implements OnChanges {
  private platformId = inject(PLATFORM_ID);
  
  @Input() stat!: StatItem;
  @Input() animate = false;

  displayValue = signal(0);
  private animationFrame?: number;

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['animate'] && this.animate && isPlatformBrowser(this.platformId)) {
      this.animateCounter();
    }
  }

  private animateCounter(): void {
    const duration = 2000; // 2 seconds
    const startTime = performance.now();
    const endValue = this.stat.value;

    const updateCounter = (currentTime: number) => {
      const elapsed = currentTime - startTime;
      const progress = Math.min(elapsed / duration, 1);
      
      // Easing function for smooth animation
      const easeOutQuart = 1 - Math.pow(1 - progress, 4);
      const currentValue = Math.floor(easeOutQuart * endValue);
      
      this.displayValue.set(currentValue);

      if (progress < 1) {
        this.animationFrame = requestAnimationFrame(updateCounter);
      }
    };

    this.animationFrame = requestAnimationFrame(updateCounter);
  }

  ngOnDestroy(): void {
    if (this.animationFrame) {
      cancelAnimationFrame(this.animationFrame);
    }
  }
}
