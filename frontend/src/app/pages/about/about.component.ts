import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../shared/section-title/section-title.component';

@Component({
  selector: 'app-about',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, SectionTitleComponent],
  templateUrl: './about.component.html',
  styleUrl: './about.component.scss'
})
export class AboutComponent {
  values = [
    { icon: '🏆', titleKey: 'about.values.quality.title', descriptionKey: 'about.values.quality.description' },
    { icon: '🤝', titleKey: 'about.values.trust.title', descriptionKey: 'about.values.trust.description' },
    { icon: '⚡', titleKey: 'about.values.efficiency.title', descriptionKey: 'about.values.efficiency.description' },
    { icon: '🌱', titleKey: 'about.values.sustainability.title', descriptionKey: 'about.values.sustainability.description' }
  ];

  teamMembers = [
    { role: 'about.team.ceo', nameKey: 'about.team.ceo_name' },
    { role: 'about.team.manager', nameKey: 'about.team.manager_name' },
    { role: 'about.team.lead', nameKey: 'about.team.lead_name' },
    { role: 'about.team.specialist', nameKey: 'about.team.specialist_name' }
  ];

  milestones = [
    { year: '2010', titleKey: 'about.milestones.founding.title', descriptionKey: 'about.milestones.founding.description' },
    { year: '2015', titleKey: 'about.milestones.growth.title', descriptionKey: 'about.milestones.growth.description' },
    { year: '2020', titleKey: 'about.milestones.expansion.title', descriptionKey: 'about.milestones.expansion.description' },
    { year: '2024', titleKey: 'about.milestones.present.title', descriptionKey: 'about.milestones.present.description' }
  ];
}
