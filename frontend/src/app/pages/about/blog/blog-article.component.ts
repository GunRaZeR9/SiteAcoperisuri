import { Component, inject, OnInit, signal } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ActivatedRoute, RouterLink } from '@angular/router';
import { TranslateModule, TranslateService } from '@ngx-translate/core';
import { SeoService } from '../../../shared/seo.service';
import { BlogArticle, getBlogArticleBySlug } from './blog.data';
import { SERVICES_DATA, ServiceData } from '../../services/services.data';

interface RelatedService {
  slug: string;
  icon: string;
  titleKey: string;
  shortDescKey: string;
}

@Component({
  selector: 'app-blog-article',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './blog-article.component.html',
  styleUrl: './blog-article.component.scss'
})
export class BlogArticleComponent implements OnInit {
  private route = inject(ActivatedRoute);
  private seoService = inject(SeoService);
  private translate = inject(TranslateService);

  article = signal<BlogArticle | null>(null);
  relatedServices = signal<RelatedService[]>([]);

  ngOnInit(): void {
    this.route.params.subscribe(params => {
      const slug = params['slug'];
      const foundArticle = getBlogArticleBySlug(slug);
      
      if (foundArticle) {
        this.article.set(foundArticle);
        this.updateSEO(foundArticle);
        this.loadRelatedServices(foundArticle);
      }
    });
  }

  private updateSEO(article: BlogArticle): void {
    const title = this.translate.instant(article.titleKey);
    const excerpt = this.translate.instant(article.excerptKey);

    this.seoService.updateMetaTags({
      title: `${title} | Blog Acoperișuri SRL`,
      description: excerpt,
      keywords: article.keywords.join(', '),
      type: 'article',
      url: `https://acoperisurisrl.ro/despre-noi/blog/${article.slug}`
    });

    // Add Article structured data
    this.seoService.addStructuredData({
      '@context': 'https://schema.org',
      '@type': 'BlogPosting',
      headline: title,
      description: excerpt,
      author: {
        '@type': 'Organization',
        name: article.author,
        url: 'https://acoperisurisrl.ro'
      },
      publisher: {
        '@type': 'Organization',
        name: 'Acoperișuri SRL',
        logo: {
          '@type': 'ImageObject',
          url: 'https://acoperisurisrl.ro/images/logo.png'
        }
      },
      datePublished: article.datePublished,
      dateModified: article.dateModified,
      mainEntityOfPage: {
        '@type': 'WebPage',
        '@id': `https://acoperisurisrl.ro/despre-noi/blog/${article.slug}`
      }
    });

    // Add breadcrumb
    this.seoService.addStructuredData(
      this.seoService.createBreadcrumbStructuredData([
        { name: 'Acasă', url: 'https://acoperisurisrl.ro/' },
        { name: 'Despre Noi', url: 'https://acoperisurisrl.ro/despre-noi' },
        { name: 'Blog', url: 'https://acoperisurisrl.ro/despre-noi/blog' },
        { name: title, url: `https://acoperisurisrl.ro/despre-noi/blog/${article.slug}` }
      ])
    );
  }

  private loadRelatedServices(article: BlogArticle): void {
    const related = article.relatedServices
      .map(serviceSlug => SERVICES_DATA.find((s: ServiceData) => s.slug === serviceSlug))
      .filter((s): s is ServiceData => s !== undefined)
      .map(s => ({
        slug: s.slug,
        icon: s.icon,
        titleKey: s.titleKey,
        shortDescKey: s.shortDescKey
      }));

    this.relatedServices.set(related);
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
