import axiosInstance from "./axios-instance";

export const getUser = async () => {
  const response = await axiosInstance.get("/auth/me");
  return response.data;
};

export const loginUser = async (credentials: {phoneNumber: string; password: string}) => {
  const response = await axiosInstance.post("/auth/login", credentials);
  // console.log('response.data', response.data)
  return response.data;
};

export const registerUser = async () => {
  const response = await axiosInstance.post("/auth/register", {
    name: "Regina Charles",
    phoneNumber: "255717666777",
    password: "@Passcode333",
    gender: "FEMALE",
    email: "rfedrick1@exp.com",
  });
  return response.data;
};

export const logOut = async () => {
  const response = await axiosInstance.post("/auth/logout", {
    headers: { accept: "*/*" },
  });
  console.log(response.status);
  return response.data;
};
