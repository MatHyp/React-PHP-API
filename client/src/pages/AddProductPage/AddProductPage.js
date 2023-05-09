import React, { useEffect } from "react";
import ReactDOM from "react-dom";
import "./AddProductPage.css";
const AddProductPage = () => {
  return (
    <div>
      <div className="navbar">
        <h1>Product Add</h1>
        <div className="buttons-contianer">
          <button className="button button-add">Save</button>
          <button className="button button-remove" id="delete-product-btn">
            Cancel
          </button>
        </div>
      </div>

      <footer className="foot">
        {" "}
        <p>Scandiweb Test assigment</p>
      </footer>
    </div>
  );
};

export default AddProductPage;
