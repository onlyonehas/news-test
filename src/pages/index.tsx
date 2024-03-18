import Card from "@/components/Card";
import Nav from "@/components/Nav";
import "../app/globals.css";

interface Article {
  title: string;
  author: string;
  source: string;
  publishedAt: string;
  url: string;
}

interface CountryType {
  name: "UK" | "US" | "France" | "Australia" | "India";
  code: string;
  articles: Article;
}

interface HomeType {
  countries: CountryType[];
}
export default function Home({ countries }: HomeType) {
  const CountriesCard = () => {
    return countries.map(
      (country: { name: any; articles: any }, index: any) => {
        const name = country?.name;
        const articles = country?.articles;
        const cardProps = { name, articles };
        return <Card props={cardProps} key={index} />;
      },
    );
  };

  return (
    <>
      <Nav />
      <div className="flex flex-row justify-center pt-14">
        <CountriesCard />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const apiKey = process.env.NEWSAPIKEY;
  const countries = [
    {
      name: "UK",
      code: "gb",
      articles: {},
    },
    {
      name: "US",
      code: "us",
      articles: {},
    },
    {
      name: "France",
      code: "fr",
      articles: {},
    },
    {
      name: "Australia",
      code: "au",
      articles: {},
    },
    {
      name: "India",
      code: "il",
      articles: {},
    },
  ];

  for await (const country of countries) {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${country.code}&pageSize=5&apiKey=${apiKey}`,
    );
    const data = await res.json();
    const articles = await data?.articles;
    country.articles = articles;
  }

  return {
    props: {
      countries,
    },
  };
}
