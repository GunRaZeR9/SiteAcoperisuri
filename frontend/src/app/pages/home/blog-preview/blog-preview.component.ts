import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterLink } from '@angular/router';
import { TranslateModule } from '@ngx-translate/core';
import { blogArticles, BlogArticle } from '../../about/blog/blog.data';

@Component({
  selector: 'app-blog-preview',
  standalone: true,
  imports: [CommonModule, RouterLink, TranslateModule],
  templateUrl: './blog-preview.component.html',
  styleUrl: './blog-preview.component.scss'
})
export class BlogPreviewComponent {
  // Get the latest 6 articles
  articles: BlogArticle[] = blogArticles.slice(0, 6);

  formatDate(dateString: string): string {
    const date = new Date(dateString);
    const day = date.getDate();
    const months = [
      'ianuarie', 'februarie', 'martie', 'aprilie', 'mai', 'iunie',
      'iulie', 'august', 'septembrie', 'octombrie', 'noiembrie', 'decembrie'
    ];
    const month = months[date.getMonth()];
    const year = date.getFullYear();
    return `${day} ${month} ${year}`;
  }
}
