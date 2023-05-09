import React, { useEffect } from "react";
import ReactDOM from "react-dom";

const HomePage = () => {
  const getProducts = async (e) => {
    const response = await fetch(
      "http://localhost/Scandiweb-Junior-Developer-Test-Task/server/products",
      {
        method: "GET",
        headers: { "Content-Type": "application/json" },
      }
    );

    const products = await response.json();
    console.log(products);
  };

  useEffect(() => {
    getProducts();
  }, []);

  return (
    <div>
      <div className="navbar"></div>
    </div>
  );
};

export default HomePage;
