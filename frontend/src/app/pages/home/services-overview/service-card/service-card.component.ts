import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImagePlaceholderComponent } from '../../../../shared/image-placeholder/image-placeholder.component';
import { ServiceItem } from '../services-overview.component';

@Component({
  selector: 'app-service-card',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, ImagePlaceholderComponent],
  templateUrl: './service-card.component.html',
  styleUrl: './service-card.component.scss'
})
export class ServiceCardComponent {
  @Input() service!: ServiceItem;
}
