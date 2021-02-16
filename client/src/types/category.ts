import { Article } from './article';

export interface CategoryArticle {
  articles: Article[];
}

export interface ChildCategory {
  name: string;
  urlPath: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
}

export interface Category {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory[];
}
