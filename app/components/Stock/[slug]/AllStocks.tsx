"use client";
import { useState, useEffect } from "react";
import { FiList } from "react-icons/fi";
import Link from "next/link";


export default function AllStocks() {
const industryFromLocalStorage = JSON.parse(localStorage.getItem("industry"));

  const [industryName, setIndustryName] = useState(industryFromLocalStorage ? industryFromLocalStorage : []);
  useEffect(function () {
    fetch("https://api.bseindia.com/BseIndiaAPI/api/IndustryWatchList/w")
      .then((res) => res.json())
      .then((data) => setIndustryName(data));
      localStorage.setItem("industry", JSON.stringify(industryName));
  }, []);

  return (
    <div className="industryName-container">
      <div className="all-stocks">
        <FiList className="list-icon" />
        <h1>All Stocks</h1>
      </div>
      <div className="industryName-list">
        {industryName.Table.map((data) => (
          <div key={data.INDUSTRY_NAME} className="industryName">
            <Link href={`/Stock/Industry${data.INDUSTRY_NAME}`}>{data.INDUSTRY_NAME}</Link>
          </div>
        ))}
      </div>
    </div>
  );
}
