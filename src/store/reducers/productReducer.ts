import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "store";
import { IProducts } from "types/product.types";
// import { AppThunk, RootState } from "..";

const product: IProducts = {
  id: 0,
  picture: "",
  name: "",
  description: "",
  type: {
    id: 0,
    name: "",
  },
  categories: [],
  implementationEffortText: "",
  investmentEffort: "",
  trl: { id: 0, name: "" },
  user: {
    id: 0,
    lastName: "",
    firstName: "",
    email: "",
    position: "",
    profilePicture: "",
    sex: 0,
  },
  company: {
    // id:null,
    address: {
      cityRegion: null,
      country: {
        name: "",
        region: "",
      },
      fallbackString: null,
      house: "",
      city: {
        name: "",
        countryId: "",
        stateId: "",
      },
      latitude: "",
      longitude: "",
      state: "",
      street: "",
      zipCode: "",
      id: null,
    },
    logo: "",
    name: "",
  },
  businessModels: [],
};

export const ProductReducer = createSlice({
  name: "product",
  initialState: {
    products: [],
    product,
  },
  reducers: {
    GET_PRODUCTS: (state, action: PayloadAction<any>) => {
      state.products = action.payload;
    },
    GET_PRODUCT: (state, action: PayloadAction<any>) => {
      state.product = action.payload;
    },
  },
});

export const { GET_PRODUCT, GET_PRODUCTS } = ProductReducer.actions;

export default ProductReducer;
export const productSelector = (state: RootState) => {
  return {
    product: state.product.product,
    products: state.product.products,
  };
};
