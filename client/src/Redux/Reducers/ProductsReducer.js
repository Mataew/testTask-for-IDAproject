const initialState = {
  products: [],
  loading: false,
};

export default function productsReducer(state = initialState, action) {
  switch (action.type) {
    case "products/load/fulfilled":
      return {
        ...state,
        products: action.payload,
      };
    case "products/delete/fulfilled":
      return {
        ...state,
        products: state.products.filter((item) => {
          if (item._id !== action.payload) {
            return item;
          }
        }),
      };
    case "products/post/fulfilled":
      return {
        ...state,
        products: [...state.products, action.payload],
        loading: false,
      };
    case "products/post/pending":
      return {
        ...state,
        loading: true,
      };
    default:
      return state;
  }
}

export const productsLoad = () => {
  return async (dispatch) => {
    try {
      const response = await fetch("http://localhost:4000/products");
      const products = await response.json();
      dispatch({ type: "products/load/fulfilled", payload: products });
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const productsDelete = (id) => {
  return async (dispatch) => {
    try {
      await fetch(`http://localhost:4000/products/${id}`, { method: "DELETE" });
      dispatch({ type: "products/delete/fulfilled", payload: id });
    } catch (e) {
      console.log(e);
    }
  };
};

export const productsAdd = (name, description, image, price) => {
  return async (dispatch) => {
    const option = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        name: name,
        description: description,
        image: image,
        price: price,
      }),
    };
    try {
      dispatch({ type: "products/post/pending" });
      const response = await fetch(`http://localhost:4000/products`, option);
      const newProduct = await response.json();
      dispatch({ type: "products/post/fulfilled", payload: newProduct });
    } catch (e) {
      console.log(e);
    }
  };
};
