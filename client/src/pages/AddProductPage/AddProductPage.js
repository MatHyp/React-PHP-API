import React, { useEffect, useState } from "react";
import ReactDOM from "react-dom";
import "./AddProductPage.css";
const AddProductPage = () => {
  const options = [
    { value: "", text: "Type Switcher" },
    { value: "DVD", text: "DVD" },
    { value: "Furniture", text: "Furniture" },
    { value: "Book", text: "Book" },
  ];

  const [selected, setSelected] = useState(options[0].value);
  const [type, setType] = useState();

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const DvdInput = () => {
    return (
      <>
        <div className="item">
          <p>Size (MB)</p>
          <input id="size" type="text" />
        </div>
        <p>Please, provide disc space in MB</p>
      </>
    );
  };

  const FurnitureInput = () => {
    return (
      <>
        <div className="item">
          <p>Height (CM)</p>
          <input id="height" type="text" />
        </div>
        <div className="item">
          <p>Width (CM)</p>
          <input id="width" type="text" />
        </div>
        <div className="item">
          <p>Lenght (CM)</p>
          <input id="lenght" type="text" />
        </div>
        <p>Please, provide dimensions in HxWxL format</p>
      </>
    );
  };

  const BookInput = () => {
    return (
      <>
        <div className="item">
          <p>Weight (KG)</p>
          <input id="weight" type="text" />
        </div>
        <p>Please, provide weight space in KG</p>
      </>
    );
  };

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
      <div className="form">
        <form id="product_form">
          <div className="item">
            <p>SKU</p>
            <input id="sku" type="text" />
          </div>
          <div className="item">
            <p>Name</p>
            <input id="name" type="text" />
          </div>
          <div className="item">
            <p>Price</p>
            <input id="price" type="text" />
          </div>
          <div className="item">
            <p>Type Switcher</p>
            <select value={selected} onChange={handleChange}>
              {options.map((option) => (
                <option
                  key={option.value}
                  value={option.value}
                  id={option.value}
                >
                  {option.text}
                </option>
              ))}
            </select>
          </div>
          {selected === "DVD" ? <DvdInput /> : ""}
          {selected === "Furniture" ? <FurnitureInput /> : ""}
          {selected === "Book" ? <BookInput /> : ""}
        </form>
      </div>
      <footer className="foot">
        <p>Scandiweb Test assigment</p>
      </footer>
    </div>
  );
};

export default AddProductPage;
