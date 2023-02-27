import { useState } from "react";

const initialValue = {
  data: null,
  status: null,
  error: null
};

export function useFetchData() {
  const [fetchData, setFetchData] = useState(initialValue);

  function onLoading() {
    setFetchData({
      ...initialValue,
      status: "loading"
    });
  }

  function onSuccess(data) {
    setFetchData({
      ...initialValue,
      status: "success",
      data: data
    });
  }

  function onError(error) {
    setFetchData({
      ...initialValue,
      status: "error",
      error: error
    });
  }

  return [fetchData, { onLoading, onSuccess, onError }];
}
