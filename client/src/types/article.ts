export interface Prices {
  currency: string;
  regular: {
    value: number;
  };
}

export interface Image {
  path: string;
}

export interface Article {
  name: string;
  variantName: string;
  prices: Prices;
  images: Image[];
}
