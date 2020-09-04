import React from "react";
import "./Home.css";
import Product from "./Product";
function Home() {
  return (
    <div className="home">
      <img
        className="home__image"
        src="https://images-na.ssl-images-amazon.com/images/G/01/IMDbTV/gateway/theoutpost/GW_DHERO_TheOutpost_1500x600_EN-US_5538_v2._CB407273330_.jpg"
        alt=""
      />
      <div className="home__row">
        <Product
          id="b1"
          title="A Knock at Midnight: A Story of Hope, Justice, and Freedom"
          price={13.99}
          rating={5}
          image="https://m.media-amazon.com/images/I/41zyNS33aFL._SY346_.jpg"
        />
        <Product
          id="b2"
          title="the subtle art of not giving a fuck"
          price={11.99}
          rating={5}
          image="https://i.gr-assets.com/images/S/compressed.photo.goodreads.com/books/1465761302i/28257707._UY400_SS400_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="l1"
          title="ASUS Chromebook Flip C434 2-In-1 Laptop- 14"
          price={704.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71PrtE1kZWL._AC_SL1500_.jpg"
        />
        <Product
          id="l2"
          title="Samsung Chromebook Plus V2, 2-in-1, Intel Core m3"
          price={599.99}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/71S%2BNzFgBTL._AC_SL1500_.jpg"
        />
        <Product
          id="l3"
          title="HP Elite Dragonfly Notebook PC"
          price={1490.42}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/51VCr1nOsXL._AC_SL1200_.jpg"
        />
      </div>
      <div className="home__row">
        <Product
          id="t1"
          title="Sony XBR-65A8H Bravia 65 OLED Ultra High Definition Smart HDR 4K TV (2020)"
          price={2298.0}
          rating={5}
          image="https://images-na.ssl-images-amazon.com/images/I/61F0MXKMLwL._AC_SL1080_.jpg"
        />
      </div>
    </div>
  );
}

export default Home;
// https://images-eu.ssl-images-amazon.com/images/G/02/digital/video/merch2016/Hero/Covid19/Generic/GWBleedingHero_ENG_COVIDUPDATE__XSite_1500x600_PV_en-GB._CB428684220_.jpg
