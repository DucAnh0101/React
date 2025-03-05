import baseURL from "./CustomAxios";

const fetchUser = (page) => {
  return baseURL.get(`/api/users?page=${page}`);
};

export { fetchUser };
