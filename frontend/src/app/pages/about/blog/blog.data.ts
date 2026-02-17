export interface BlogArticle {
  id: string;
  slug: string;
  titleKey: string;
  excerptKey: string;
  contentKey: string;
  datePublished: string;
  dateModified: string;
  author: string;
  keywords: string[];
  relatedServices: string[]; // Service slugs
  readTimeMinutes: number;
  image?: string;
}

export const blogArticles: BlogArticle[] = [
  {
    id: '1',
    slug: 'cat-costa-acoperis-nou-2026',
    titleKey: 'blog.articles.cat_costa_acoperis_nou_2026.title',
    excerptKey: 'blog.articles.cat_costa_acoperis_nou_2026.excerpt',
    contentKey: 'blog.articles.cat_costa_acoperis_nou_2026.content',
    datePublished: '2026-02-01',
    dateModified: '2026-02-01',
    author: 'Acoperișuri SRL',
    keywords: ['cost acoperis', 'pret acoperis', 'acoperis nou 2026', 'buget acoperis'],
    relatedServices: ['acoperisuri', 'renovare'],
    readTimeMinutes: 8,
  },
  {
    id: '2',
    slug: 'tigla-metalica-vs-ceramica',
    titleKey: 'blog.articles.tigla_metalica_vs_ceramica.title',
    excerptKey: 'blog.articles.tigla_metalica_vs_ceramica.excerpt',
    contentKey: 'blog.articles.tigla_metalica_vs_ceramica.content',
    datePublished: '2026-01-28',
    dateModified: '2026-01-28',
    author: 'Acoperișuri SRL',
    keywords: ['tigla metalica', 'tigla ceramica', 'comparatie tigla', 'materiale acoperis'],
    relatedServices: ['acoperisuri', 'renovare'],
    readTimeMinutes: 9,
  },
  {
    id: '3',
    slug: 'durata-montaj-acoperis',
    titleKey: 'blog.articles.durata_montaj_acoperis.title',
    excerptKey: 'blog.articles.durata_montaj_acoperis.excerpt',
    contentKey: 'blog.articles.durata_montaj_acoperis.content',
    datePublished: '2026-01-25',
    dateModified: '2026-01-25',
    author: 'Acoperișuri SRL',
    keywords: ['durata montaj', 'cat dureaza montaj acoperis', 'timp instalare'],
    relatedServices: ['acoperisuri', 'mansardare'],
    readTimeMinutes: 10,
  },
  {
    id: '4',
    slug: 'greseli-montaj-acoperisuri',
    titleKey: 'blog.articles.greseli_montaj_acoperisuri.title',
    excerptKey: 'blog.articles.greseli_montaj_acoperisuri.excerpt',
    contentKey: 'blog.articles.greseli_montaj_acoperisuri.content',
    datePublished: '2026-01-20',
    dateModified: '2026-01-20',
    author: 'Acoperișuri SRL',
    keywords: ['greseli montaj', 'erori acoperis', 'instalare corecta', 'calitate montaj'],
    relatedServices: ['acoperisuri', 'reparatii'],
    readTimeMinutes: 8,
  },
  {
    id: '5',
    slug: 'cand-inlocuim-acoperis',
    titleKey: 'blog.articles.cand_inlocuim_acoperis.title',
    excerptKey: 'blog.articles.cand_inlocuim_acoperis.excerpt',
    contentKey: 'blog.articles.cand_inlocuim_acoperis.content',
    datePublished: '2026-01-15',
    dateModified: '2026-01-15',
    author: 'Acoperișuri SRL',
    keywords: ['inlocuire acoperis', 'renovare vs reparatie', 'cand inlocuiesc acoperisul'],
    relatedServices: ['renovare', 'reparatii'],
    readTimeMinutes: 7,
  },
  {
    id: '6',
    slug: '5-semne-reparatie-acoperis',
    titleKey: 'blog.articles.semne_reparatie_acoperis.title',
    excerptKey: 'blog.articles.semne_reparatie_acoperis.excerpt',
    contentKey: 'blog.articles.semne_reparatie_acoperis.content',
    datePublished: '2026-01-10',
    dateModified: '2026-01-10',
    author: 'Acoperișuri SRL',
    keywords: ['semne deteriorare acoperis', 'cand repar acoperisul', 'probleme acoperis'],
    relatedServices: ['reparatii', 'hidroizolatii'],
    readTimeMinutes: 6,
  },
];

export function getBlogArticleBySlug(slug: string): BlogArticle | undefined {
  return blogArticles.find(article => article.slug === slug);
}

export function getLatestBlogArticles(count: number = 3): BlogArticle[] {
  return blogArticles.slice(0, count);
}
