import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert";

function Products() {
  const apiUrl = "http://localhost:9000/products";
  const [getProducts, setGetProducts] = useState([]);

  function getAllProducts() {
    fetch(apiUrl)
      .then((res) => res.json())
      .then((data) => setGetProducts(data));
  }

  useEffect(() => {
    getAllProducts();
  }, []);

  async function deleteProduct(product) {
    const productId = product.id;
    const productTitle = product.title;
    // Display the confirmation dialog using swal
    const result = await swal({
      title: "Delete Method",
      text: `Are you sure you want to delete "${productTitle}" ?`,
      icon: "warning",
      buttons: ["Cancel", "Delete"],
      dangerMode: true,
    });

    // Check if the user clicked the "Delete" button
    if (result) {
      try {
        // Proceed with the deletion
        const response = await fetch(`${apiUrl}/${productId}`, {
          method: "DELETE",
        });
        if (!response.ok) {
          throw new Error("Failed to delete product");
        }
        const data = await response.json();
        console.log(data);
        // Refresh the products list after deletion
        getAllProducts();
      } catch (error) {
        console.error(error);
      }
    }
  }

  const products = getProducts.map((product) => {
    return (
      <tr key={product.id}>
        <td>{product.id}</td>
        <td>{product.title}</td>
        <td>${product.price}</td>
        <td className="d-flex flex-wrap gap-2">
          <Link
            to={`/products/${product.id}`}
            className="btn btn-sm btn-info mx-1 col"
          >
            View
          </Link>
          <button className="btn btn-sm btn-primary mx-1 col">Edit</button>
          <button
            onClick={() => deleteProduct(product)}
            className="btn btn-sm btn-danger mx-1 col"
          >
            Delete
          </button>
        </td>
      </tr>
    );
  });

  return (
    <>
      <h1>Products</h1>
      <Link to={"/products/add"} className="btn btn-success mt-4">
        Add New Product
      </Link>
      <table className="table table-striped mt-3">
        <thead>
          <tr>
            <th>ID</th>
            <th>Title</th>
            <th>Price</th>
            <th>Operations</th>
          </tr>
        </thead>
        <tbody>{products}</tbody>
      </table>
    </>
  );
}

export default Products;
