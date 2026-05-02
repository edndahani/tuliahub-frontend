import { useNavigate } from "react-router-dom"
import { Button } from "./ui/button"

const HeaderCTA = () => {
  const navigate = useNavigate()

  return (
    <div className="ml-auto md:ml-0 pr-2 flex gap-4">
      <Button onClick={() => navigate("/login")} variant="text-link">Sign In</Button>
      <Button onClick={() => navigate("/register")} className="hidden xs:inline-block">Create Account</Button>
    </div>
  )
}

export default HeaderCTA