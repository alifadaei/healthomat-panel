import { useState } from "react";

export const CommonHeaders = {
  EhsanAPI: {
    accept: "text/plain",
    "Content-Type": "application/json",
  },
};

const useHTTP = () => {
  const [loading, setLoading] = useState(false);
  const [errors, setError] = useState("");
  const send = async (
    url: string,
    method: "POST" | "GET" | "PUT",
    body?: any,
    headers?: any
  ) => {
    setLoading(true);
    //test token
    const raw = await fetch(url, {
      method,
      body: body ? JSON.stringify(body) : null,
      headers: {
        // ...CommonHeaders.EhsanAPI,
        ...headers,
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });
    setLoading(false);
    if (raw.ok) {
      //token is fresh
      const response = await raw.json();
      return response;
    } else {
      //token is not fresh
      // localStorage.removeItem("token");
      // window.location.reload();
    }
    setLoading(false);
  };

  return { loading, send, errors, setError };
};
export default useHTTP;
