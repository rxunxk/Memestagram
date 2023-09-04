import { BNContainer } from "../StyledComponents/BottomNavBarSC";
// import { LikedIcon } from "../StyledComponents/PostsStyledComponents";
import {
  ChatIcon,
  SettingsIcon,
  CreateIcon,
  HomeIcon,
} from "../StyledComponents/GlobalSC";
import UserIcon from "../Components/UserIcon";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../util/utilFunctions";
// import {
//   Dialog,
//   DialogContent,
//   DialogDescription,
//   DialogHeader,
//   DialogTitle,
//   DialogFooter,
// } from "@/components/ui/dialog";
// import { Button } from "@/components/ui/button";
// import { useState } from "react";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { setLogoutDialog } from "../redux/slices/logoutDialog";
import { useDispatch } from "react-redux";

const BottomNavBar = () => {
  // const [logoutDialog, setLogoutDialog] = useState(false);
  const navigate = useNavigate();
  const currentUser = getCurrentUser();
  const dispatch = useDispatch();
  return (
    <BNContainer>
      <HomeIcon
        height={25}
        width={25}
        onClick={() => {
          navigate("/Home");
        }}
      />
      <ChatIcon
        height={25}
        width={25}
        onClick={() => {
          navigate("/Chat");
        }}
      />
      <CreateIcon
        height={25}
        width={25}
        onClick={() => {
          navigate("/Create");
        }}
      />
      <DropdownMenu className="border ">
        <DropdownMenuTrigger className="flex ">
          <SettingsIcon
            height={25}
            width={25}
            // onClick={() => {
            //   console.log("bn nav bar");
            //   dispatch(setLogoutDialog());
            // }}
          />
        </DropdownMenuTrigger>
        <DropdownMenuContent className="border border-[#27272a] bg-black text-white">
          <DropdownMenuItem
            className="hover:bg-[#27272a] text-red-400"
            onClick={() => {
              dispatch(setLogoutDialog(true));
            }}
          >
            Logout
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>

      <UserIcon
        height={25}
        width={25}
        onClick={() => {
          navigate("/Profile", { state: { userId: currentUser._id } });
        }}
        src={currentUser.profilePicture}
        cursor={"pointer"}
      />
    </BNContainer>
  );
};

export default BottomNavBar;
