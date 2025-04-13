import { useState, useEffect } from "react";
import { getProducts, getUsers } from "../services/apiService";

const useFetch = () => {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchProducts = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getProducts();
      setProducts(data || []);
    } catch (error) {
      console.log("fetchProducts:", error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };
  const fetchUsers = async () => {
    setLoading(true);
    setError(null);
    try {
      const data = await getUsers();
      setUsers(data || []);
    } catch (error) {
      console.log("fetchUsers:", error.message);
      setError(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchProducts(), fetchUsers();
  }, []);

  return {
    products,
    users,
    loading,
    error,
    fetchProducts,
    fetchUsers
  };
};

export default useFetch
