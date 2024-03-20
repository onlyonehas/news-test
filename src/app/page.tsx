import Card from "@/components/Card";
import Nav from "@/components/Nav";
import { getData } from "@/lib/getData";

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
export default async function Home() {
  const countries = await getData();

  const CountriesCard = () => {
    return countries?.map((country: any, index: any) => {
      const name = country?.name;
      const articles = country?.articles;
      const cardProps = { name, articles };

      console.log(cardProps);
      return <Card props={cardProps} key={index} />;
    });
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
