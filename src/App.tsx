import { useEffect } from "react";
import "./App.css";
import { useAuthContext } from "./hooks/use-auth-context";
import { useGetUser } from "./hooks/use-auth";
import Spinner from "./components/spinner";
import { SidebarProvider } from "./components/ui/sidebar";
import AppRoutes from "./routes/app-routes";
import { Toaster } from "sonner";

function App() {
  const { setAuthState } = useAuthContext();
  const { data, isPending, isError } = useGetUser();

  const isLogin: boolean = !!data && !isError;

  useEffect(() => {
    setAuthState({ user: data || null });
  }, [data, setAuthState]);

  // getUser();
  // logOut();
  // loginUser("255717333444" ,"Password123!");
  // registerUser();

  if (isPending) {
    return (
      <>
        <Spinner />
        {/* <p>Loading....</p> */}
      </>
    );
  }

  return (
    <SidebarProvider>
      <AppRoutes isLogin={isLogin} />
      <Toaster />
    </SidebarProvider>
  );
}

export default App;
