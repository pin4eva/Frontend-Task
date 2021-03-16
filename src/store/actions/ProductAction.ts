import axios from "axios";
import { GET_PRODUCT } from "store/reducers/productReducer";

export const getProduct = (id: number) => async (dispatch) => {
  try {
    const { data } = await axios.get(
      `https://api-test.innoloft.com/product/${id}`
    );

    dispatch(GET_PRODUCT(data));
  } catch (error) {
    console.log(error);
  }
};
