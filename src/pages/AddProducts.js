import { useState } from "react";
import { useNavigate } from "react-router-dom";
import swal from "sweetalert";

function AddProducts() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [price, setPrice] = useState("");

  const navigate = useNavigate();

  function addNewProduct(title, description, price) {
    fetch("http://localhost:9000/products", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        title,
        description,
        price,
      }),
    })
      .then((res) => {
        if (!res.ok) {
          throw new Error("Failed to add new product");
        }
        return res.json();
      })
      .then((data) => {
        console.log("New Product Added", data);
        // Display success message using swal
        swal({
          text: `"${data.title}" Added Successfully`,
          icon: "success",
        });
        // Reset input values to empty strings
        // setTitle("");
        // setDescription("");
        // setPrice("");
        // Navigate to products page
        navigate("/products");
      })
      .catch((error) => {
        console.error("Error adding new product:", error);
      });
  }

  function handleClick(e) {
    e.preventDefault();
    if (title && description && price) {
      addNewProduct(title, description, price);
    } else {
      return;
    }
  }

  return (
    <>
      <h1>Add New Product</h1>
      <form className="mt-4" method="post">
        <div className="form-group my-3">
          <label htmlFor="productTitle">Product Title</label>
          <input
            name="title"
            onChange={(e) => setTitle(e.target.value)}
            value={title}
            type="text"
            className="form-control my-1"
            id="productTitle"
            placeholder="Enter product title"
          />
        </div>
        <div className="form-group my-3">
          <label htmlFor="productDescription">Product Description</label>
          <textarea
            name="description"
            onChange={(e) => setDescription(e.target.value)}
            value={description}
            className="form-control my-1"
            id="productDescription"
            rows="3"
            placeholder="Enter product description"
          ></textarea>
        </div>
        <div className="form-group my-3">
          <label htmlFor="productPrice">Product Price</label>
          <input
            name="price"
            onChange={(e) => setPrice(e.target.value)}
            value={price}
            type="number"
            className="form-control my-1"
            id="productPrice"
            placeholder="Enter product price"
          />
        </div>
        <button
          onClick={(e) => handleClick(e)}
          type="submit"
          className="btn btn-primary"
        >
          Add Product
        </button>
      </form>
    </>
  );
}

export default AddProducts;
