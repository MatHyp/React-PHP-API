import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./HomePage.css";
const HomePage = () => {
  const [products, setProducts] = useState([]);
  const [itemsToRemove, setItemsToRemove] = useState([]);

  const getProducts = async () => {
    const response = await fetch(
      "http://testscandiwebsitemateusz.000webhostapp.com/products",
      {
        method: "GET",
      }
    );

    const responseJson = await response.json();

    const updatedTable = responseJson.filter((data) => data.sku !== "");
    console.log(updatedTable);
    setProducts(updatedTable);
  };

  useEffect(() => {
    getProducts();
  }, []);

  const handleCheckboxChange = (sku) => {
    itemsToRemove.includes(sku);
    if (itemsToRemove.includes(sku)) {
      const updatedTable = itemsToRemove.filter((data) => data !== sku);
      setItemsToRemove(updatedTable);
    } else {
      setItemsToRemove([...itemsToRemove, sku]);
    }
  };

  const removeProducts = async () => {
    console.log(itemsToRemove);
    const response = await fetch(
      "http://testscandiwebsitemateusz.000webhostapp.com/removeProducts",
      {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          products: itemsToRemove.join(" "),
        }),
      }
    );

    const wynik = products.filter(
      (element) => !itemsToRemove.includes(element.sku)
    );

    setProducts(wynik);
    wynik = 0;
    setItemsToRemove([]);
    const responseJson = await response.json();
  };

  return (
    <div>
      <div className="navbar">
        <h1>Product List</h1>
        <div className="buttons-contianer">
          <a href="add-product">
            <button className="button button-add">ADD</button>
          </a>
          <button
            className="button button-remove"
            id="delete-product-btn"
            onClick={removeProducts}
          >
            MASS DELETE
          </button>
        </div>
      </div>
      <div className="products-list">
        {products.map((post) => {
          return (
            <div className="product" key={post.sku}>
              <input
                type="checkbox"
                className="delete-checkbox"
                id={post.sku}
                onChange={(e) => handleCheckboxChange(post.sku)}
              />
              <p>{post.sku}</p>
              <p>{post.name}</p>
              <p>{post.price}$</p>
              <p>
                {post.type == 1 ? "Weight" : ""}
                {post.type == 2 ? "Dimension" : ""}
                {post.type == 3 ? "Size" : ""}: {post.attribute}
                {post.type == 3 ? " MB" : ""}
                {post.type == 1 ? " KG" : ""}
              </p>
            </div>
          );
        })}
      </div>

      <footer className="foot">
        <p>Scandiweb Test assigment</p>
      </footer>
    </div>
  );
};

export default HomePage;
