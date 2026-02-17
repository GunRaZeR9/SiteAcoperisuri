import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { SectionTitleComponent } from '../../../shared/section-title/section-title.component';
import { SeoService } from '../../../shared/seo.service';
import { blogArticles, BlogArticle } from './blog.data';

@Component({
  selector: 'app-blog-list',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule, SectionTitleComponent],
  templateUrl: './blog-list.component.html',
  styleUrl: './blog-list.component.scss'
})
export class BlogListComponent implements OnInit {
  private seoService = inject(SeoService);
  
  articles = signal<BlogArticle[]>(blogArticles);

  ngOnInit(): void {
    this.seoService.updateMetaTags({
      title: 'Blog - Ghid Complet Acoperișuri | Acoperișuri SRL',
      description: 'Articole expert despre acoperișuri: costuri, materiale, instalare și întreținere. Ghiduri complete pentru proprietari și constructori.',
      keywords: 'blog acoperisuri, ghid acoperisuri, costuri acoperis, tigla metalica, tigla ceramica, reparatie acoperis',
      type: 'website',
      url: 'https://acoperisurisrl.ro/despre-noi/blog'
    });

    // Add breadcrumb structured data
    this.seoService.addStructuredData(
      this.seoService.createBreadcrumbStructuredData([
        { name: 'Acasă', url: 'https://acoperisurisrl.ro/' },
        { name: 'Despre Noi', url: 'https://acoperisurisrl.ro/despre-noi' },
        { name: 'Blog', url: 'https://acoperisurisrl.ro/despre-noi/blog' }
      ])
    );
  }

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    return date.toLocaleDateString('ro-RO', { 
      year: 'numeric', 
      month: 'long', 
      day: 'numeric' 
    });
  }
}
