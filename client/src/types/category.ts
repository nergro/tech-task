import { Article } from './article';

export type CategoryArticle = {
  articles: Article[];
};

export type ChildCategory = {
  name: string;
  urlPath: string;
};

export type Category = {
  name: string;
  categoryArticles: CategoryArticle;
  articleCount: number;
  childrenCategories: ChildCategory[];
};
