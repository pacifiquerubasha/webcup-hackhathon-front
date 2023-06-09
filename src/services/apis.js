const API_URL = "https://dominantdynast.maurice.webcup.hodi.host/api/";
//const API_URL = "http://localhost:8000/";

export const login = (data) => {
  return fetch(API_URL + "accounts/login/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((response) => response.json())
    .then((data) => {
      //check data has key
      if (data.hasOwnProperty("key")) {
        localStorage.setItem("token", data.key);
        return { status: "success" };
      }
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

export const get_dreams = () => {
  return fetch(API_URL + "dream/get_dreams/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
  }).then((response) => {
    console.log("response", response);
    return response.json();
  });
};

export const get_dream = (id) => {
  return fetch(API_URL + `dream/get_dream_by_id/?id=${id}`, {}).then(
    (response) => {
      console.log("response", response);
      return response.json();
    }
  );
};
export const save_dream = (data) => {
  return fetch(API_URL + "dream/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const contact = (data) => {
  return fetch(API_URL + "contact/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const save_post = (data) => {
  return fetch(API_URL + "post/", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Token ${localStorage.getItem("token")}`,
    },
    body: JSON.stringify(data),
  }).then((response) => response.json());
};

export const get_posts = () => {
  return fetch(API_URL + "post/", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};

export const get_post = (id) => {
  return fetch(API_URL + `post/${id}/`, {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((response) => response.json());
};
