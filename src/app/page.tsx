import Card, { CountryType } from "@/components/Card";
import Nav from "@/components/Nav";
import { getData } from "@/lib/getData";

// TODO: filter values by country for mobile
export default async function Home() {
  const countries = await getData();

  const CountriesCard = () => {
    return countries?.map((country, index) => {
      const name = country?.name;
      const articles = country?.articles;
      const cardProps = { name, articles } as CountryType;
      return <Card props={cardProps} key={index} />;
    });
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col sm:flex-row justify-center pt-14">
        <CountriesCard />
      </div>
    </>
  );
}
