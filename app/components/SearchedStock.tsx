interface SearchedCompany {
  company?: string;
  symbol?: string;
}
interface SearchedStock {
  searchedStock: SearchedCompany[];
}

export default function SearchedStock({ searchedStock }: SearchedStock) {
  return (
    <div className="popularStocks-list-wrapper">
      {searchedStock?.map(({ company, symbol }) => (
        <div className="popularStocks-list" key={company}>
          <div className="stocks-name">
            <a className="stocks-fullname">{company}</a>
            <p className="stocks-abbreviation">{symbol}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
