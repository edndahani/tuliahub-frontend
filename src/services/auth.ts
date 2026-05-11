import type { Payload } from "@/types";
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

export const registerUser = async (payload: Payload) => {
  const response = await axiosInstance.post("/auth/register", payload);
  return response.data;
};

export const logOut = async () => {
  const response = await axiosInstance.post("/auth/logout", {
    headers: { accept: "*/*" },
  });
  console.log(response.status);
  return response.data;
};
