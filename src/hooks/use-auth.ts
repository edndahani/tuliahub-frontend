import { getUser, loginUser, logOut } from "@/services/auth";
import { useMutation, useQuery, useQueryClient } from "@tanstack/react-query";
import { useAuthContext } from "./use-auth-context";
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
    },

    onError: (error) => {
      console.error("Logout error:", error.message || "Logout failed")
    }
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
    },

    onError: (error) => {
      console.error("Login Error:", error.message || "Login failed")
    }
  });
};
