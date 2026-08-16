export type ProductCategory = 
  | 'all'
  | 'wither'
  | 'roll'
  | 'ferment'
  | 'dry'
  | 'sort'
  | 'pack'
  | 'anc';

export interface ProductSpec {
  label: string;
  value: string;
}

export interface Product {
  id: string;
  slug: string;
  code: string;
  name: string;
  stageName: string;
  categories: ProductCategory[];
  subtitle: string;
  badge: string;
  description: string;
  longDescription?: string;
  specs: ProductSpec[];
  features: string[];
  schematicId: string;
  dimensionText: string;
  highlighted?: boolean;
}

export interface ClientCompany {
  id: string;
  name: string;
  country: string;
  countryCode: 'india' | 'kenya' | 'rwanda' | 'tanzania' | 'uganda' | 'srilanka' | 'vietnam' | 'indonesia' | 'china' | 'other';
}

export interface Milestone {
  year: string;
  title: string;
  description: string;
}

export interface GalleryItem {
  id: string;
  src: string;
  alt: string;
  caption: string;
  wide?: boolean;
}
