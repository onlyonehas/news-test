import { CardType } from "./sharedTypes";

export async function getData(): Promise<CardType[]> {
  const apiKey = process.env.NEWSAPIKEY;
  const countries = [
    {
      name: "UK",
      code: "gb",
      articles: [],
    },
    {
      name: "US",
      code: "us",
      articles: [],
    },
    {
      name: "France",
      code: "fr",
      articles: [],
    },
    {
      name: "Australia",
      code: "au",
      articles: [],
    },
    {
      name: "India",
      code: "il",
      articles: [],
    },
  ];

  for await (const country of countries) {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country.code}&pageSize=5&apiKey=${apiKey}`,
      { next: { revalidate: 3600 } },
    );
    const data = await res.json();
    const articles = await data?.articles;
    country.articles = articles;
  }

  return [...countries];
}
