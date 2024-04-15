export interface PassedProps {
  countries: CardType[];
}

export interface CardType {
  name: string;
  articles: Article[];
}

export interface Article {
  title: string;
  author: string;
  source: {
    name: string;
  };
  publishedAt: string;
  url: string;
}
