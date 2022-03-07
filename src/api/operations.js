import {API_KEY, API_URL} from "./consts";

export const getOperations = async (id, successCallback) => {
  try {
    const r = await fetch(`${API_URL}/tasks/${id}/operations`, {
      headers: {
        Authorization: API_KEY,
      },
    });
    const data = await r.json();
    if (data.error === false && typeof successCallback === "function") {
      successCallback(data.data);
    }
  } catch (err) {
    throw new Error(err)
  };
};

 export const createOperation = async (id, operation, successCallback) => {
   try {
     const r = await fetch(`${API_URL}/tasks/${id}/operations`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(operation)
    });
    const data = await r.json();
    if (data.error === false && typeof successCallback === "function") {
      successCallback(data.data);
    }
   } catch (err) {
    throw new Error(err)
  };
};

 export const updateOperation = async (id, operation, successCallback) => {
   try {
     const r = await fetch(`${API_URL}/operations/${id}`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(operation)
    });
    const data = await r.json();
    if (data.error === false && typeof successCallback === "function") {
      successCallback(data.data);
    }
   } catch (err) {
    throw new Error(err)
  };
};

 export const removeOperation = async (id, successCallback) => {
   try {
     const r = await fetch(`${API_URL}/operations/${id}`, {
      headers: {
        "Authorization": API_KEY
      },
      method: "DELETE"
    });
    const data=await r.json();
    if (data.error === false && typeof successCallback === "function") {
      successCallback();
    }
   } catch (err) {
    throw new Error(err)
  };
};