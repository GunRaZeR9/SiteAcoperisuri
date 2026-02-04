import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-image-placeholder',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './image-placeholder.component.html',
  styleUrl: './image-placeholder.component.scss'
})
export class ImagePlaceholderComponent {
  @Input() aspectRatio: '16:9' | '4:3' | '1:1' | '3:4' | '21:9' = '16:9';
  @Input() type: 'default' | 'logo' | 'service' | 'portfolio' | 'team' | 'person' = 'default';
  @Input() alt = 'Image placeholder';
  @Input() src?: string; // Add src input for actual images
  @Input() width?: number; // Explicit width for CLS prevention
  @Input() height?: number; // Explicit height for CLS prevention
  @Input() priority: boolean = false; // For LCP images

  get aspectClass(): string {
    return `aspect-${this.aspectRatio.replace(':', '-')}`;
  }

  get icon(): string {
    const icons: Record<string, string> = {
      default: '📷',
      logo: '🏠',
      service: '🔧',
      portfolio: '🏗️',
      team: '👥',
      person: '👤'
    };
    return icons[this.type] || icons['default'];
  }
}
