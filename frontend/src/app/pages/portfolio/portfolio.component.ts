import { Component, signal, computed } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { ImagePlaceholderComponent } from '../../shared/image-placeholder/image-placeholder.component';
import { PORTFOLIO_DATA, PORTFOLIO_CATEGORIES, PortfolioItem } from './portfolio.data';

@Component({
  selector: 'app-portfolio',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, ImagePlaceholderComponent],
  templateUrl: './portfolio.component.html',
  styleUrl: './portfolio.component.scss'
})
export class PortfolioComponent {
  categories = PORTFOLIO_CATEGORIES;
  allProjects = PORTFOLIO_DATA;
  
  activeFilter = signal('all');

  filteredProjects = computed(() => {
    const filter = this.activeFilter();
    if (filter === 'all') {
      return this.allProjects;
    }
    return this.allProjects.filter(project => project.category === filter);
  });

  setFilter(categoryId: string): void {
    this.activeFilter.set(categoryId);
  }
}
