import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function ShowProduct() {
  let { productId } = useParams();
  const [product, setProduct] = useState({});
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch(`http://localhost:9000/products/${productId}`)
      .then((res) => res.json())
      .then((data) => {
        setProduct(data);
        setLoading(false);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      {loading ? (
        "Loading..."
      ) : (
        <div className="container">
          <h1>{product.title}</h1>
          <div className="card">
            <img
              src={product.image}
              className="card-img-top w-25"
              alt={product.title}
            />
            <div className="card-body">
              <h5 className="card-title">${product.price}</h5>
              <p className="card-text">{product.description}</p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default ShowProduct;
