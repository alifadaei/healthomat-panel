import axios from "axios";
import { useState } from "react";
const useAPI = () => {
  const client = axios.create({
    headers: { accept: "text/plain", "Content-Type": "application/json" },
    withCredentials: true,
  });
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState("");
  return {
    loading,
    setLoading,
    httpErrors: errors,
    setHttpErrors: setError,
    client,
  };
};
export default useAPI;
