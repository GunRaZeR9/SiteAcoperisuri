import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { ServiceCardComponent } from './service-card/service-card.component';

export interface ServiceItem {
  id: string;
  slug: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
  image?: string;
}

@Component({
  selector: 'app-services-overview',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent, ServiceCardComponent],
  templateUrl: './services-overview.component.html',
  styleUrl: './services-overview.component.scss'
})
export class ServicesOverviewComponent {
  services: ServiceItem[] = [
    {
      id: 'roofing',
      slug: 'acoperisuri',
      icon: '🏠',
      titleKey: 'services.roofing.title',
      descriptionKey: 'services.roofing.short_desc',
      image: 'images/services/roofing-installation.jpg'
    },
    {
      id: 'repairs',
      slug: 'reparatii',
      icon: '🔧',
      titleKey: 'services.repairs.title',
      descriptionKey: 'services.repairs.short_desc',
      image: 'images/services/roof-repair.jpg'
    },
    {
      id: 'renovation',
      slug: 'renovare',
      icon: '🔄',
      titleKey: 'services.renovation.title',
      descriptionKey: 'services.renovation.short_desc',
      image: 'images/services/roof-renovation.jpg'
    },
    {
      id: 'waterproofing',
      slug: 'hidroizolatii',
      icon: '💧',
      titleKey: 'services.waterproofing.title',
      descriptionKey: 'services.waterproofing.short_desc',
      image: 'images/services/waterproofing.jpg'
    },
    {
      id: 'carpentry',
      slug: 'dulgherie',
      icon: '🪵',
      titleKey: 'services.carpentry.title',
      descriptionKey: 'services.carpentry.short_desc',
      image: 'images/services/carpentry.jpg'
    },
    {
      id: 'attic',
      slug: 'mansardare',
      icon: '📐',
      titleKey: 'services.attic.title',
      descriptionKey: 'services.attic.short_desc',
      image: 'images/services/attic-conversion.jpg'
    }
  ];
}
