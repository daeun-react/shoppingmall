import { Col, Row } from "antd";
import Axios from "axios";
import React, { useEffect, useState } from "react";
import ProductImage from "./Sections/ProductImage ";
import ProductInfo from "./Sections/ProductInfo";
import { useDispatch } from "react-redux";
import { addToCart } from "../../../_actions/user_actions";

function DetailProductPage(props) {
  const productId = props.match.params.productId;
  const [Product, setProduct] = useState([]);

  const dispatch = useDispatch();

  useEffect(() => {
    Axios.get(`/api/product/products_by_id?id=${productId}&type=single`).then(
      (response) => {
        console.log(response.data[0]);
        setProduct(response.data[0]);
      }
    );
  }, []);

  const addToCartHandler = (productId) => {
    dispatch(addToCart(productId));
  };

  return (
    <div className="postPage" style={{ width: "100%", padding: "3rem 4rem" }}>
      <div style={{ display: "flex", justifyContent: "center" }}>
        <h1>{Product.title}</h1>
      </div>

      <Row gutter={[16, 16]}>
        <Col lg={12} xs={24}>
          <ProductImage detail={Product} />
        </Col>
        <Col lg={12} xs={24}>
          <ProductInfo detail={Product} addToCart={addToCartHandler} />
        </Col>
      </Row>
    </div>
  );
}

export default DetailProductPage;
