interface Article {
  title: string;
  author: string;
  source: {
    name: string;
  };
  publishedAt: string;
  url: string;
}

export interface CountryType {
  name: string;
  articles: Article[];
}

interface CardProps {
  props: CountryType;
}

export default function Card({ props }: CardProps): JSX.Element {
  const DisplayHeadlines = () => {
    const hasArticles = props?.articles;
    let list;
    if (hasArticles) {
      list = props?.articles.map((article: Article, index: number) => {
        return (
          <li className="pb-6 pt-4" key={index}>
            <p>
              {index + 1}.
              <span className="font-bold dark:text-blue ">
                {" "}
                <a href={article.url}>{article.title}</a>
              </span>
            </p>
            <p>
              {" "}
              Source:
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {article.source.name}
              </span>
            </p>
            <p>
              Published At:
              <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
                {new Date(article.publishedAt).toLocaleString()}
              </span>
            </p>
          </li>
        );
      });
    }
    return list ? <ol>{list} </ol> : <p>Loading ...</p>;
  };

  return (
    <div className="min-w-lg rounded overflow-hidden shadow-lg px-6">
      <h1 className="lg:text-4xl items-center text-2xl font-extrabold text-red-900">
        {props?.name}
      </h1>
      <span className="bg-blue-100 lg:text-2xl text-xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-red-200 dark:text-black ms-2">
        Top 5 Headlines
      </span>
      <DisplayHeadlines />
    </div>
  );
}
