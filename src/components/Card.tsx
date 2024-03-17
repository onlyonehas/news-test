type Card = {
  country: "UK" | "US" | "France" | "Australia" | "India";
  headlines: any;
};

export default function Card({ country, headlines }: Card) {
  return (
    <div className="max-w-sm rounded overflow-hidden shadow-lg">
      <div className="px-6 py-4">
        <div className="font-bold text-xl mb-2">{country}</div>
        <div>
          <p className="text-red-700 text-base font-bold">Top Headlines:</p>
          <li> {headlines}</li>
        </div>
      </div>
      <div className="px-6 pt-4 pb-2">
        <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">
          #{country}
        </span>
      </div>
    </div>
  );
}
