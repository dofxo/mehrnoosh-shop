export interface IProduct {
  id: number;
  created_at: string;
  name: {
    en: string;
    fa: string;
  };
  description: {
    fa: string;
    en: string;
  };
  quantity: string;
  sold_amount: string;
  properties: {
    color: {
      en: string[];
      fa: string[];
    };
    brand: {
      en: string;
      fa: string;
    };
  };
  price: string;
  discount_price: string;
  category: {
    en: string[];
    fa: string[];
  };
  comments: {
    cons: string[];
    name: string;
    pros: string[];
    rating: string;
    comment: string;
    created_at: string;
  }[];
  images: string[];
}
