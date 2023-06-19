"use client";
import { useState, useEffect } from "react";
import { FiList } from "react-icons/fi";
import Link from "next/link";

interface IndustryName {
  Table?: {
    INDUSTRY_NAME: string;
  }[];
}

export default function AllStocks() {
  const [industryName, setIndustryName] = useState<IndustryName>({});
  useEffect(
    function () {
      fetch("https://api.bseindia.com/BseIndiaAPI/api/IndustryWatchList/w")
        .then((res) => res.json())
        .then((data) => setIndustryName(data));
    },
    [industryName]
  );

  return (
    <div className="industryName-container">
      <div className="all-stocks">
        <FiList className="list-icon" />
        <h1>All Sectors</h1>
      </div>
      <div className="industryName-list">
        {industryName?.Table?.map((data) => (
          <div key={data.INDUSTRY_NAME} className="industryName">
            <p>{data.INDUSTRY_NAME}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
