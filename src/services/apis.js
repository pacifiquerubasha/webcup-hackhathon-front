//const API_URL = "https://dominantdynast.maurice.webcup.hodi.host/api/";
const API_URL = "http://localhost:8000/";

export const login = (data) => {
  //fetch
  return fetch(API_URL + "accounts/login", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      return data;
    });
};

export const register = (data) => {
  console.log(data);
  return fetch(API_URL + "accounts/registration/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => {
    console.log(response);
    if (response.status === 204) {
      return { status: "success" };
    }
  });
};
