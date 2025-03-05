import baseURL from "./CustomAxios";

const fetchUser = () => {
  return baseURL.get("/api/users?page=1");
};

export { fetchUser };
