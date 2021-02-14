import { ApolloError, gql, useQuery } from '@apollo/client';
import { Category } from '../types/category';

const GET_PRODUCTS = gql`
  query getProducts {
    categories(ids: "156126", locale: de_DE) {
      name
      articleCount
      childrenCategories {
        name
        urlPath
      }
      categoryArticles(first: 50) {
        articles {
          name
          variantName
          prices {
            currency
            regular {
              value
            }
          }
          images(format: WEBP, maxWidth: 200, maxHeight: 200, limit: 1) {
            path
          }
        }
      }
    }
  }
`;

export const useGetProducts = (): Category[] | 'loading' | ApolloError => {
  const { data, loading, error } = useQuery(GET_PRODUCTS);

  return loading ? 'loading' : error || data;
};
