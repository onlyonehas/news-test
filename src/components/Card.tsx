export default function Card({ props }: any) {
  const DisplayHeadlines = () => {
    const hasArticles = props?.articles;
    let list;
    if (hasArticles) {
      list = props?.articles.map((article: any, index: any) => {
        return (
          <li className="pb-6 pt-4" key={index}>
            {index + 1}
            <p>
              <a href={article.url}>{article.title}</a>
            </p>
            <p> Source: </p>
            <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
              {article.source.name}
            </span>
            <p>
              Published At: {new Date(article.publishedAt).toLocaleDateString()}
            </p>
          </li>
        );
      });
    }
    return list ? <ol>{list} </ol> : <p>Loading ...</p>;
  };

  return (
    <div className="min-w-lg rounded overflow-hidden shadow-lg px-6">
      <h1 className="flex items-center text-5xl font-extrabold text-blue-800">
        {props?.name}
      </h1>
      <span className="bg-blue-100 text-blue-800 text-2xl font-semibold me-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ms-2">
        Top 5 Headlines
      </span>
      <DisplayHeadlines />
    </div>
  );
}
