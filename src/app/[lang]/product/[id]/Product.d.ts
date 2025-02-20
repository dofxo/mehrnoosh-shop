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
  rating: string[];
  category: {
    en: string[];
    fa: string[];
  };
  commnets: {
    cons: string[];
    name: string;
    pros: string[];
    rating: string;
    commnet: string;
    created_at: string;
  }[];
  images: string[];
}
