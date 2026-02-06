export interface ServiceData {
  id: string;
  slug: string;
  icon: string;
  titleKey: string;
  shortDescKey: string;
  fullDescKey: string;
  benefits: string[];
  features: string[];
  image?: string; // Add image property
}

export const SERVICES_DATA: ServiceData[] = [
  {
    id: 'roofing',
    slug: 'acoperisuri',
    icon: '🏠',
    titleKey: 'services.roofing.title',
    shortDescKey: 'services.roofing.short_desc',
    fullDescKey: 'services.roofing.full_desc',
    benefits: [
      'services.roofing.benefit_1',
      'services.roofing.benefit_2',
      'services.roofing.benefit_3',
      'services.roofing.benefit_4'
    ],
    features: [
      'services.roofing.feature_1',
      'services.roofing.feature_2',
      'services.roofing.feature_3',
      'services.roofing.feature_4'
    ],
    image: 'images/services/roofing-installation.webp'
  },
  {
    id: 'repairs',
    slug: 'reparatii',
    icon: '🔧',
    titleKey: 'services.repairs.title',
    shortDescKey: 'services.repairs.short_desc',
    fullDescKey: 'services.repairs.full_desc',
    benefits: [
      'services.repairs.benefit_1',
      'services.repairs.benefit_2',
      'services.repairs.benefit_3',
      'services.repairs.benefit_4'
    ],
    features: [
      'services.repairs.feature_1',
      'services.repairs.feature_2',
      'services.repairs.feature_3',
      'services.repairs.feature_4'
    ],
    image: 'images/services/roof-repair.webp'
  },
  {
    id: 'renovation',
    slug: 'renovare',
    icon: '🔄',
    titleKey: 'services.renovation.title',
    shortDescKey: 'services.renovation.short_desc',
    fullDescKey: 'services.renovation.full_desc',
    benefits: [
      'services.renovation.benefit_1',
      'services.renovation.benefit_2',
      'services.renovation.benefit_3',
      'services.renovation.benefit_4'
    ],
    features: [
      'services.renovation.feature_1',
      'services.renovation.feature_2',
      'services.renovation.feature_3',
      'services.renovation.feature_4'
    ],
    image: 'images/services/roof-renovation.webp'
  },
  {
    id: 'waterproofing',
    slug: 'hidroizolatii',
    icon: '💧',
    titleKey: 'services.waterproofing.title',
    shortDescKey: 'services.waterproofing.short_desc',
    fullDescKey: 'services.waterproofing.full_desc',
    benefits: [
      'services.waterproofing.benefit_1',
      'services.waterproofing.benefit_2',
      'services.waterproofing.benefit_3',
      'services.waterproofing.benefit_4'
    ],
    features: [
      'services.waterproofing.feature_1',
      'services.waterproofing.feature_2',
      'services.waterproofing.feature_3',
      'services.waterproofing.feature_4'
    ],
    image: 'images/services/waterproofing.webp'
  },
  {
    id: 'carpentry',
    slug: 'dulgherie',
    icon: '🪵',
    titleKey: 'services.carpentry.title',
    shortDescKey: 'services.carpentry.short_desc',
    fullDescKey: 'services.carpentry.full_desc',
    benefits: [
      'services.carpentry.benefit_1',
      'services.carpentry.benefit_2',
      'services.carpentry.benefit_3',
      'services.carpentry.benefit_4'
    ],
    features: [
      'services.carpentry.feature_1',
      'services.carpentry.feature_2',
      'services.carpentry.feature_3',
      'services.carpentry.feature_4'
    ],
    image: 'images/services/carpentry.webp'
  },
  {
    id: 'attic',
    slug: 'mansardare',
    icon: '📐',
    titleKey: 'services.attic.title',
    shortDescKey: 'services.attic.short_desc',
    fullDescKey: 'services.attic.full_desc',
    benefits: [
      'services.attic.benefit_1',
      'services.attic.benefit_2',
      'services.attic.benefit_3',
      'services.attic.benefit_4'
    ],
    features: [
      'services.attic.feature_1',
      'services.attic.feature_2',
      'services.attic.feature_3',
      'services.attic.feature_4'
    ],
    image: 'images/services/attic-conversion.webp'
  }
];

export function getServiceBySlug(slug: string): ServiceData | undefined {
  return SERVICES_DATA.find(service => service.slug === slug);
}
