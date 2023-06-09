"use client";
import Link from "next/link"
import { useEffect, useState } from "react";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";

interface CompanyDetails {
      symbol: string,
      curr_price: number,
      prev_close:number,
      per_change:number,
      change:number
}

interface SliderData {
  results? : CompanyDetails[]
}


export default function Slider() {
  const [sliderData, setSliderData] = useState<SliderData>({});

  useEffect(function () {
    fetch(
      "https://portal.tradebrains.in/api/index/constitients/NIFTY/?page=1&by=m_cap&ascending=false&per_page=25"
    )
      .then((res) => res.json())
      .then((data) => setSliderData(data));
  }, []);

  return (
    <div className="slider-container">
      <div className="slide-track">
        {sliderData?.results?.map(({symbol, curr_price, prev_close, per_change, change}) => (
          <a className="slide-list" key={symbol}>
            <Link href={`/Stock/${symbol}`} className="slide-companyName">{symbol}</Link>
            <span className="slide-price">{curr_price}</span>
            <span
              className="slide-change"
              style={{
                color:
                  curr_price > prev_close
                    ? "rgb(0, 255, 87)"
                    : "rgb(248, 46, 46)",
              }}
            >
              {curr_price > prev_close
                ? `+${change} (+${per_change})`
                : `${change} (${per_change})`}
            </span>
            <span className="slide-arrowIcon">
              {curr_price > prev_close ? (
                <AiFillCaretUp className="downArrow"/>
              ) : (
                < AiFillCaretDown className="upArrow"/>
              )}
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
// per_change
