export interface PortfolioItem {
  id: string;
  titleKey: string;
  category: string;
  categoryKey: string;
  descriptionKey: string;
  location: string;
  year: number;
  image?: string; // Add image property
}

export const PORTFOLIO_DATA: PortfolioItem[] = [
  {
    id: 'project-1',
    titleKey: 'portfolio.project_1.title',
    category: 'roofing',
    categoryKey: 'portfolio.categories.roofing',
    descriptionKey: 'portfolio.project_1.description',
    location: 'București',
    year: 2025,
    image: 'images/portfolio/project-1.webp'
  },
  {
    id: 'project-2',
    titleKey: 'portfolio.project_2.title',
    category: 'renovation',
    categoryKey: 'portfolio.categories.renovation',
    descriptionKey: 'portfolio.project_2.description',
    location: 'Cluj-Napoca',
    year: 2025,
    image: 'images/portfolio/project-2.webp'
  },
  {
    id: 'project-3',
    titleKey: 'portfolio.project_3.title',
    category: 'repairs',
    categoryKey: 'portfolio.categories.repairs',
    descriptionKey: 'portfolio.project_3.description',
    location: 'Timișoara',
    year: 2024,
    image: 'images/portfolio/project-3.webp'
  },
  {
    id: 'project-4',
    titleKey: 'portfolio.project_4.title',
    category: 'waterproofing',
    categoryKey: 'portfolio.categories.waterproofing',
    descriptionKey: 'portfolio.project_4.description',
    location: 'Iași',
    year: 2024,
    image: 'images/portfolio/project-4.webp'
  },
  {
    id: 'project-5',
    titleKey: 'portfolio.project_5.title',
    category: 'roofing',
    categoryKey: 'portfolio.categories.roofing',
    descriptionKey: 'portfolio.project_5.description',
    location: 'Brașov',
    year: 2024,
    image: 'images/portfolio/project-5.webp'
  },
  {
    id: 'project-6',
    titleKey: 'portfolio.project_6.title',
    category: 'attic',
    categoryKey: 'portfolio.categories.attic',
    descriptionKey: 'portfolio.project_6.description',
    location: 'Sibiu',
    year: 2024,
    image: 'images/portfolio/project-6.webp'
  },
  {
    id: 'project-7',
    titleKey: 'portfolio.project_7.title',
    category: 'carpentry',
    categoryKey: 'portfolio.categories.carpentry',
    descriptionKey: 'portfolio.project_7.description',
    location: 'Oradea',
    year: 2023,
    image: 'images/portfolio/project-7.webp'
  },
  {
    id: 'project-8',
    titleKey: 'portfolio.project_8.title',
    category: 'renovation',
    categoryKey: 'portfolio.categories.renovation',
    descriptionKey: 'portfolio.project_8.description',
    location: 'Constanța',
    year: 2023,
    image: 'images/portfolio/project-8.webp'
  },
  {
    id: 'project-9',
    titleKey: 'portfolio.project_9.title',
    category: 'roofing',
    categoryKey: 'portfolio.categories.roofing',
    descriptionKey: 'portfolio.project_9.description',
    location: 'Craiova',
    year: 2023,
    image: 'images/portfolio/project-9.webp'
  }
];

export const PORTFOLIO_CATEGORIES = [
  { id: 'all', labelKey: 'portfolio.categories.all' },
  { id: 'roofing', labelKey: 'portfolio.categories.roofing' },
  { id: 'renovation', labelKey: 'portfolio.categories.renovation' },
  { id: 'repairs', labelKey: 'portfolio.categories.repairs' },
  { id: 'waterproofing', labelKey: 'portfolio.categories.waterproofing' },
  { id: 'carpentry', labelKey: 'portfolio.categories.carpentry' },
  { id: 'attic', labelKey: 'portfolio.categories.attic' }
];
