import axios from "axios";
import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router";
import { getProduct } from "store/actions/ProductAction";
import { productSelector } from "store/reducers/productReducer";
import styled from "styled-components";
import { IProducts, IUser } from "types/product.types";

const SingleProductPage = () => {
  const { product } = useSelector(productSelector);

  const dispatch = useDispatch();
  const [view, setView] = useState(false);
  // const [product, setProduct] = useState<IProducts>();
  const { id } = useParams<any>();
  // const url = `https://api-test.innoloft.com/product/${id}`;

  useEffect(() => {
    dispatch(getProduct(id));
  }, [id]);

  if (!product) return <p>Loading...</p>;
  return (
    <Wrapper>
      <div className="left bg-gray container">
        <img className="image" src={product?.picture} alt="" />
        <h6>{product?.name}</h6>

        <nav className="navbar">
          <ul className="nav">
            <li className="nav-item">
              <span
                className={`nav-link c-hand ${!view ? "text-primary" : ""}`}
                onClick={() => setView(false)}
              >
                Description
              </span>
            </li>
            <li className="nav-item">
              <span
                className={`nav-link c-hand ${view ? "text-primary" : ""}`}
                onClick={() => setView(true)}
              >
                Attributes
              </span>
            </li>
          </ul>
        </nav>

        {!view ? (
          <div className="mt-2 description">
            <p>{product?.description}</p>
          </div>
        ) : (
          <div className="mt-2">
            <Attributes product={product!} />
          </div>
        )}
      </div>
      <div className="right container">
        <div className="top">
          <div>
            <UserDetails user={product!.user} />
          </div>
        </div>
        <div className="bottom">
          <div className="container">
            <h3>Map</h3>
          </div>
        </div>
      </div>
    </Wrapper>
  );
};

export default SingleProductPage;

const Wrapper = styled.div`
  max-width: 100%;
  min-height: 100%;
  .description {
    line-height: 1.5;
    text-align: justify;
  }
  @media screen and (min-width: 768px) {
    display: flex;
    .right {
      width: 100%;
      max-width: 20rem;
      background-color: #fff;
      ul {
        box-sizing: border-box;
      }
    }
  }
  .left {
    width: 100%;
    .image {
      width: 100%;
      max-width: 35rem;
    }
    .navbar {
      margin-top: 4rem;
      .nav {
        justify-content: center;
        &-item {
          margin-right: 2rem;
        }
      }
    }
  }

  img {
    width: 100%;
  }
`;

// export interface IUser {
//   id: number;
//   email: string;
//   firstName: string;
//   lastName: string;
//   sex: number;
//   profilePicture: string;
//   position: string;
// }

const UserDetails = ({ user }: { user: IUser }) => {
  return (
    <div className="w-100">
      <div className="card flat">
        <div className="profile">
          <img src="/images/phone-1.jpg" alt="" />
          <h2 className="name">
            {user.firstName} {user.lastName}
          </h2>
          <ul className="nav flex-column mt-2 w-100">
            <li className="nav-item">
              <span className="nav-link">Email: {user.email}</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">Position: {user.position}</span>
            </li>
            <li className="nav-item">
              <span className="nav-link">
                Gender: {user.sex ? "Male" : "Female"}
              </span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

const Attributes = ({ product }: { product: IProducts }) => {
  return (
    <Table>
      <thead>
        <tr>
          <th>Type</th>
          <th>Company</th>
          <th>Categories</th>
          <th>Investment Effort</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{product.type.name}</td>
          <td>{product.company.name}</td>
          <td>
            <ul>
              {product.categories?.map((category, i) => (
                <li key={i} className="mb-1">
                  {category.name}
                </li>
              ))}
            </ul>
          </td>
          <td>{product.investmentEffort}</td>
        </tr>
      </tbody>
    </Table>
  );
};

const Table = styled.table`
  /* background-color: red; */
  width: 100%;
  text-align: left;
`;
