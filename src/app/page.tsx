import HomeBlock from "@/components/HomeBlock";
import { getData } from "@/lib/getData";

export default async function Home() {
  const countries = await getData();

  return (
    <>
      <HomeBlock countries={countries} />
    </>
  );
}
