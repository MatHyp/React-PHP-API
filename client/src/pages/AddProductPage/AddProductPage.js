import React, { useEffect, useState } from "react";
import "./AddProductPage.css";

import { useNavigate } from "react-router-dom";

const AddProductPage = () => {
  const navigate = useNavigate();

  const options = [
    { value: "", text: "Type Switcher" },
    { value: "1", text: "DVD" },
    { value: "2", text: "Furniture" },
    { value: "3", text: "Book" },
  ];
  const [selected, setSelected] = useState(options[0].value);
  const [sku, setSku] = useState("");
  const [name, setName] = useState("");
  const [price, setPrice] = useState("");

  const [kg_mb, setKg_mb] = useState("");

  const [height, setHeight] = useState("");
  const [weight, setWeight] = useState("");
  const [length, setLength] = useState("");
  const [allFiled, setAllFillerd] = useState(false);

  const [text, setText] = useState("");
  const handleSubmit = async (e) => {
    let attribute;
    selected === "1" || selected === "3"
      ? (attribute = kg_mb)
      : (attribute = `${height}x${weight}x${length}`);
    if (allFiled) {
      const response = await fetch(
        "http://testscandiwebsitemateusz.000webhostapp.com/addProducts",
        {
          method: "POST",
          body: JSON.stringify({
            sku: sku,
            name: name,
            price: price,
            type: parseInt(selected),
            attribute: attribute,
          }),
        }
      );

      const test = await response.json();

      if (test == "That sku exists") {
        setText("That sku exists");
      } else {
        navigate("/");
      }
    } else {
      setText("Fill up all fields.");
    }
  };

  const handleChange = (event) => {
    setSelected(event.target.value);
  };

  const tester = () => {
    if (
      sku != "" &&
      name != "" &&
      price != "" &&
      kg_mb != "" &&
      selected !== "2"
    ) {
      setAllFillerd(true);
      setText("");
    } else if (
      sku != "" &&
      name != "" &&
      price != "" &&
      height != "" &&
      weight != "" &&
      length != "" &&
      selected === "2"
    ) {
      setAllFillerd(true);
      setText("");
    }
  };

  return (
    <div>
      <div className="navbar">
        <h1>Product Add</h1>
        <div className="buttons-contianer">
          <button className="button button-add" onClick={handleSubmit}>
            Save
          </button>
          <a href="/">
            <button className="button button-remove" id="delete-product-btn">
              Cancel
            </button>
          </a>
        </div>
      </div>
      <div className="form">
        <form id="product_form">
          <div className="item">
            <p>SKU</p>
            <input
              id="sku"
              name="sku"
              type="text"
              onChange={(e) => {
                setSku(e.target.value);
                tester();
              }}
            />
          </div>
          <div className="item">
            <p>Name</p>
            <input
              id="name"
              name="name"
              type="text"
              onChange={(e) => {
                setName(e.target.value);
                tester();
              }}
            />
          </div>
          <div className="item">
            <p>Price</p>
            <input
              id="price"
              name="price"
              type="number"
              onChange={(e) => {
                setPrice(e.target.value);
                tester();
              }}
            />
          </div>
          <div className="item">
            <p>Type Switcher</p>
            <select value={selected} id="productType" onChange={handleChange}>
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
          {selected === "1" ? (
            <div>
              <div className="item">
                <p>Size (MB)</p>
                <input
                  id="size"
                  name="size"
                  type="number"
                  onChange={(e) => {
                    setKg_mb(e.target.value);
                    tester();
                  }}
                />
              </div>
              <p>Please, provide size in MB</p>
            </div>
          ) : (
            ""
          )}
          {selected === "2" ? (
            <>
              <div className="item">
                <p>Height (CM)</p>
                <input
                  id="height"
                  name="height"
                  type="number"
                  onChange={(e) => {
                    setHeight(e.target.value);
                    tester();
                  }}
                />
              </div>
              <div className="item">
                <p>Width (CM)</p>
                <input
                  id="width"
                  name="width"
                  type="number"
                  onChange={(e) => {
                    setWeight(e.target.value);
                    tester();
                  }}
                />
              </div>
              <div className="item">
                <p>Lenght (CM)</p>
                <input
                  id="length"
                  name="length"
                  type="number"
                  onChange={(e) => {
                    setLength(e.target.value);
                    tester();
                  }}
                />
              </div>
              <p>Please, provide dimensions in HxWxL format</p>
            </>
          ) : (
            ""
          )}
          {selected === "3" ? (
            <>
              <div className="item">
                <p>Weight (KG)</p>
                <input
                  id="weight"
                  name="weight"
                  type="number"
                  onChange={(e) => {
                    setKg_mb(e.target.value);
                    tester();
                  }}
                />
              </div>
              <p>Please, provide weight in KG</p>
            </>
          ) : (
            ""
          )}
        </form>
        <p>{text}</p>
      </div>
      <footer className="foot">
        <p>Scandiweb Test assigment</p>
      </footer>
    </div>
  );
};

export default AddProductPage;
