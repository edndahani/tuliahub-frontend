import { ChevronDown } from "lucide-react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "./ui/dropdown-menu";
import { useAuthContext } from "@/hooks/use-auth-context";
import { useLogoutUser } from "@/hooks/use-auth";

const ProfileIcon = () => {
  const { authState } = useAuthContext();
  const {mutateAsync: handleLogOut, isPending} = useLogoutUser()

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <button className="mr-2 ml-auto md:ml-0 flex justify-center items-center relative w-10 h-10 rounded-full">
          <img
            className="h-10 w-10 object-cover rounded-full"
            src="user.png"
            alt=""
          />
          <div className="right-0 -bottom-1 absolute bg-[#e2e5e9] h-4 w-4 rounded-full border-2 border-white flex items-center justify-center">
            <ChevronDown color="#6e7175" size={14} />
          </div>
        </button>
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        <DropdownMenuLabel>
          <div className="flex items-center gap-2">
            <img
              className="h-8 w-8 object-cover rounded-full"
              src="user.png"
              alt=""
            />
            <div className="flex flex-col">
              <span className="font-bold text-xl">{authState.user?.name}</span>
              <span className="font-medium text-[12px]">{authState.user?.email}</span>
            </div>
          </div>
        </DropdownMenuLabel>

        <DropdownMenuSeparator />

        <DropdownMenuItem>Profile</DropdownMenuItem>
        <DropdownMenuItem>Settings</DropdownMenuItem>

        <DropdownMenuSeparator />

        <DropdownMenuItem disabled={isPending} onClick={() => handleLogOut()}>{isPending ? "Logging out..." : "Logout"}</DropdownMenuItem>
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default ProfileIcon;
