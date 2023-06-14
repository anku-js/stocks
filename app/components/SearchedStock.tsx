interface SearchedCompany {
    searchedStock: [
        company: string,
        symbol: string,
    ];
  }

export default function SearchedStock({searchedStock}: SearchedCompany) {
  return (
    <div className="popularStocks-list-wrapper">
      {searchedStock?.map(
        ({ company, symbol }) => (
          <div className="popularStocks-list" key={company}>
            <div className="stocks-name">
              <a className="stocks-fullname">{company}</a>
              <p className="stocks-abbreviation">{symbol}</p>
              
              {/* <p className="stocks-abbreviation">{symbol}</p> */}
            </div>
          </div>
        )
      )}
    </div>
  );
}
