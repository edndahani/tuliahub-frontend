import { getUser, loginUser, logOut, registerUser } from "@/services/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "./use-auth-context";
import axios from "axios";
import { toast } from "sonner";
// import { error } from "console";

export const useGetUser = () => {
  return useQuery({
    queryKey: ["user"],
    queryFn: getUser,
    retry: false,
  });
};

export const useLogoutUser = () => {
  const queryClient = useQueryClient();
  const { setAuthState } = useAuthContext();

  return useMutation({
    mutationFn: logOut,

    onSuccess: () => {
      queryClient.setQueryData(["user"], null);
      setAuthState({ user: null });
      queryClient.clear();
      toast.success("Logout successfully!", { position: "top-center" });
    },

    onError: (error) => {
      console.error("Logout error:", error.message || "Logout failed");
    },
  });
};

export const useLoginUser = () => {
  const queryClient = useQueryClient();
  const { setAuthState } = useAuthContext();

  return useMutation({
    mutationFn: loginUser,

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);
      setAuthState({ user: data });
      queryClient.invalidateQueries({ queryKey: ["user"] });
      toast.success("Welcome back!", { position: "top-center" });
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 400) {
          toast.error("Invalid phone number", { position: "top-center" });
        } else if (status === 401) {
          toast.error("The number or password is incorrect.", {
            position: "top-center",
          });
        } else if (status === 404) {
          toast.error("The user doesn't exist.", { position: "top-center" });
        } else {
          toast.error("Login failed", { position: "top-center" });
        }
      } else {
        toast.error(error.message);
      }
    },
  });
};

export const useRegister = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: registerUser,

    onSuccess: (data) => {
      queryClient.setQueryData(["user"], data);

      toast.success("Registration was successful!", { position: "top-center" });
    },

    onError: (error) => {
      if (axios.isAxiosError(error)) {
        const status = error.response?.status;

        if (status === 400) {
          toast.error(
            error.response?.data?.message || "Invalid registration data",
            { position: "top-center" },
          );
        } else if (status === 409) {
          toast.error("Email or phone number already registered", {
            position: "top-center",
          });
        } else {
          toast.error("Registration failed. Try again later", {
            position: "top-center",
          });
        }
      } else {
        toast.error(error.message)
      }
    },
  });
};
