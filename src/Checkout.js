import React from "react";
import "./Checkout.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import Subtotal from "./Subtotal";

function Checkout() {
  const [{ basket }] = useStateValue();
  return (
    <div className="checkout">
      <div className="checkout__left">
        <img
          src="https://m.media-amazon.com/images/G/01/shazam/US-GC-EN-Birthday-House-Ads-980x55--CB444703821--hf8Uf._V445557662_.jpg"
          className="checkout__ad"
          alt=""
        />
        {basket?.length === 0 ? (
          <div>
            <h2>Your Amazon Cart is empty</h2>
            <p>
              The price and availability of items at Amazon.com are subject to
              change. The Cart is a temporary place to store a list of your
              items and reflects each item's most recent price. Shopping
              CartLearn more Do you have a gift card or promotional code? We'll
              ask you to enter your claim code when it's time to pay.
            </p>
          </div>
        ) : (
          <div>
            <h2 className="checkout__title">Your Basket Is Here</h2>
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        )}
        ;
      </div>
      {basket.length > 0 && (
        <div className="checkout__right">
          <Subtotal />
        </div>
      )}
    </div>
  );
}

export default Checkout;
