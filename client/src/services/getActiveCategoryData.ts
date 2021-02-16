import { Category } from '../types/category';

type CategoryData = Omit<Category, 'childrenCategories'>;

export const getActiveCategoryData = (path: string, category: Category): CategoryData => {
  const childrenCategory = category.childrenCategories.find(x => x.urlPath === path);

  return childrenCategory || category;
};
