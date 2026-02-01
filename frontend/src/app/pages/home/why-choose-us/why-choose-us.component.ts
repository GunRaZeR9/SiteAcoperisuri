import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { ReasonCardComponent } from './reason-card/reason-card.component';

export interface ReasonItem {
  id: string;
  icon: string;
  titleKey: string;
  descriptionKey: string;
}

@Component({
  selector: 'app-why-choose-us',
  standalone: true,
  imports: [CommonModule, TranslateModule, SectionTitleComponent, ReasonCardComponent],
  templateUrl: './why-choose-us.component.html',
  styleUrl: './why-choose-us.component.scss'
})
export class WhyChooseUsComponent {
  reasons: ReasonItem[] = [
    {
      id: 'experience',
      icon: '🏆',
      titleKey: 'reasons.experience.title',
      descriptionKey: 'reasons.experience.description'
    },
    {
      id: 'quality',
      icon: '✨',
      titleKey: 'reasons.quality.title',
      descriptionKey: 'reasons.quality.description'
    },
    {
      id: 'team',
      icon: '👷',
      titleKey: 'reasons.team.title',
      descriptionKey: 'reasons.team.description'
    },
    {
      id: 'warranty',
      icon: '🛡️',
      titleKey: 'reasons.warranty.title',
      descriptionKey: 'reasons.warranty.description'
    },
    {
      id: 'pricing',
      icon: '💰',
      titleKey: 'reasons.pricing.title',
      descriptionKey: 'reasons.pricing.description'
    },
    {
      id: 'support',
      icon: '🤝',
      titleKey: 'reasons.support.title',
      descriptionKey: 'reasons.support.description'
    }
  ];
}
