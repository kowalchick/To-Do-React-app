import { API_KEY, API_URL } from "./consts";

export const getTasks = async (successCallback) => {
  try {
    const r = await fetch(`${API_URL}/tasks`, {
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

export const createTask = async (task, successCallback) => {
  try {
    const r = await fetch(`${API_URL}/tasks`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify(task)
    });
    const data = await r.json();
    if (data.error === false && typeof successCallback === "function") {
      successCallback(data.data);
    }
  } catch (err) {
    throw new Error(err)
  };
};
export const updateTask = async (id, task, successCallback) => {
  try {
    const r = await fetch(`${API_URL}/tasks/${id}`, {
      headers: {
        "Authorization": API_KEY,
        "Content-Type": "application/json",
      },
      method: "PUT",
      body: JSON.stringify(task)
    });
    const data = await r.json();
    if (data.error === false && typeof successCallback === "function") {
      successCallback(data.data);
    }
  } catch (err) {
    throw new Error(err)
  };
};
export const removeTask = async (id, successCallback) => {
  try {
    const r = await fetch(`${API_URL}/tasks/${id}`, {
      headers: {
        "Authorization": API_KEY
      },
      method: "DELETE"
    });
    const data = await r.json();
    if (data.error === false && typeof successCallback === "function") {
      successCallback();
    }
  } catch (err) {
    throw new Error(err)
  };
};

//underneath the same code but written not using async trick
// export const getTasks = (successCallback) => {
//   fetch(`${API_URL}/tasks`, {
//     headers: {
//       Authorization: API_KEY,
//     },
//   })
//     .then((r) => r.json())
//     .then((data) => {
//       if (data.error === false && typeof successCallback === "function") {
//         successCallback(data.data);
//       }
//     })
//     .catch((err) => console.log(err));
// };
 
//  export const createTask = (task, successCallback) => {
//   fetch(`${API_URL}/tasks`, {
//     headers: {
//       "Authorization": API_KEY,
//       "Content-Type": "application/json",
//     },
//     method: "POST",
//     body: JSON.stringify(task)
//   })
//     .then(r => r.json())
//     .then(data => {
//       if (data.error === false && typeof successCallback === "function") {
//         successCallback(data.data);
//       }
//     })
//     .catch(err => console.log(err));
// };


//  export const updateTask = (id, task, successCallback) => {
//   fetch(`${API_URL}/tasks/${id}`, {
//     headers: {
//       "Authorization": API_KEY,
//       "Content-Type": "application/json",
//     },
//     method: "PUT",
//     body: JSON.stringify(task)
//   })
//     .then(r => r.json())
//     .then(data => {
//       if (data.error === false && typeof successCallback === "function") {
//         successCallback(data.data);
//       }
//     })
//     .catch(err => console.log(err));
// };

//  export const removeTask = (id, successCallback) => {
//   fetch(`${API_URL}/tasks/${id}`, {
//     headers: {
//       "Authorization": API_KEY
//     },
//     method: "DELETE"
//   })
//     .then(r => r.json())
//     .then(data => {
//       if (data.error === false && typeof successCallback === "function") {
//         successCallback();
//       }
//     })
//     .catch(err => console.log(err));
// };


