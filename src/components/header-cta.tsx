import { Link } from "react-router-dom"
import { buttonVariants } from "./ui/button"
import { cn } from "@/lib/utils"

const HeaderCTA = () => {

  return (
    <div className="ml-auto md:ml-0 pr-2 flex items-center gap-4">
      {/* <Button className="max-xs:text-[0.875rem]" onClick={() => navigate("/login")} variant="ghost">Sign In</Button> */}
      {/* <Button onClick={() => navigate("/register")} className="hidden xs:inline-block">Create Account</Button> */}
      <Link to={"/login"} className={cn(buttonVariants({variant: "ghost"}), "max-xs:text-[0.875rem]")}>Log in</Link>
      <Link to={"/register"} className={cn(buttonVariants(), "hidden xs:inline-flex")}>Create account</Link>
    </div>
  )
}

export default HeaderCTA