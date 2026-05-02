import { useEffect, useState } from "react";
import "./App.css";
import Header from "./components/header";
// import MainContents from "./components/main-contents";
import Sidebar from "./components/sidebar";
import { Outlet } from "react-router-dom";
// import { getUser, loginUser, logOut, registerUser } from "./services/auth";
import { useAuthContext } from "./hooks/use-auth-context";
import { useGetUser } from "./hooks/use-auth";
import Spinner from "./components/spinner";

function App() {
  const [isSideOpen, setIsSideOpen] = useState(false);
  const { setAuthState } = useAuthContext();
  const { data, isPending, isError } = useGetUser()

  const isLogin = !!data && !isError

  useEffect(() => {
    setAuthState({user: data || null})
  }, [data,setAuthState])
  
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
    )
  }

  return (
    <>
      <div className="">
        <Header setIsOpen={setIsSideOpen} isLogin={isLogin} />
        <Sidebar isOpen={isSideOpen} setIsOpen={setIsSideOpen} />
        <Outlet />
      </div>
    </>
  );
}

export default App;
