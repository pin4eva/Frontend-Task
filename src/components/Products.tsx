import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

// interface IPage extends IProducts {
//   picture: string;
// }

const Products = ({ product }) => {
  return (
    <Wrapper>
      <NavLink to={`/products/${product.id}`}>
        <div className="card">
          <img src={product.picture} alt="" />
          <p>Tag: SoftWare</p>
        </div>
      </NavLink>
    </Wrapper>
  );
};

export default Products;

const Wrapper = styled.div`
  margin-bottom: 1rem;
  /* background-color: #fff; */
  /* padding: 1rem; */
  /* box-shadow: 5px 5px 5px rgba(0, 0, 0, 0.5); */
  a {
    text-decoration: none;
  }
  img {
    width: 100%;
    height: 100%;
    max-height: 15rem;
  }
`;
