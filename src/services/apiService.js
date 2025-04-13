import API from "./api";

export const getUsers = async () => {
  try {
    const res = await API.get("/users");
    return res.data;
  } catch (error) {
    console.log("getUser", error.message);
    return [];
  }
};


export const getProducts= async () => {
  try {
    const res = await API.get(`/products`);
    return res.data;
  } catch (error) {
    console.log("getProduct", error.message);
  }
};
