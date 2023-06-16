import Link from "next/link";
interface Props {
  company?: string;
  symbol?: string;
}
interface SearchedStock {
  searchedStock: Props[];
}

export default function SearchedStock({ searchedStock }: SearchedStock) {
  return (
    <div className="popularStocks-list-wrapper">
      {searchedStock?.map(({ company, symbol }) => (
        <div className="popularStocks-list" key={company}>
          <div className="stocks-name">
            <Link href={`/components/Stock/${symbol}`} className="stocks-fullname">{company}</Link>
            <p className="stocks-abbreviation">{symbol}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
