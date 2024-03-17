import Card from "@/components/Card";
import Nav from "@/components/Nav";
import "../app/globals.css";

const countries = {
  UK: {
    code: "gb",
  },
  US: {
    code: "us",
  },
  France: {
    code: "fr",
  },
  Australia: {
    code: "au",
  },
  India: {
    code: "il",
  },
} as { [key: string]: any };

export default function Home({ countries }: any) {
  return (
    <>
      <Nav />
      <div className="flex flex-row justify-center pt-32">
        <Card country="UK" headlines={"hi"} />
        <Card country="US" headlines={"test"} />
        <Card country="France" headlines={"test"} />
        <Card country="Australia" headlines={"test"} />
        <Card country="India" headlines={"test"} />
      </div>
    </>
  );
}

export async function getStaticProps() {
  const apiKey = process.env.NEWSAPIKEY;
  for (const country in countries) {
    const res = await fetch(
      `https://newsapi.org/v2/top-headlines?country=${countries[country].code}&pageSize=5&apiKey=${apiKey}`,
    );
    const data = await res.json();
    countries[country].articles = await data.articles;
  }

  return {
    props: {
      countries,
    },
  };
}
