/* eslint-disable react/no-unescaped-entities */
import { AiFillSetting, AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  SideBarContainer,
  SbarLogo,
  ListItem,
  ListItemText,
} from "../StyledComponents/SidebarStyledComponents";
import { useNavigate } from "react-router-dom";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";

const iconstyle = {
  height: "24px",
  width: "24px",
  marginRight: "10px",
  flexShrink: 0,
};

const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);
  const [logoutDialog, setLogoutDialog] = useState(false);

  const navigate = useNavigate();

  function updateScreenSize() {
    const isSmall = window.matchMedia("(max-width: 1300px)").matches;
    setIsSmallScreen(isSmall);
  }

  useEffect(() => {
    updateScreenSize(); // Call the function at the initial render
    window.addEventListener("resize", updateScreenSize); // Listen for screen size changes

    // Cleanup the event listener on unmount
    return () => {
      window.removeEventListener("resize", updateScreenSize);
    };
  }, []);

  return (
    <>
      <Dialog open={logoutDialog} onOpenChange={setLogoutDialog}>
        <DialogContent className="bg-black text-white border-[#27272a]">
          <DialogHeader>
            <DialogTitle className="text-base">
              Are you sure you want to log out?
            </DialogTitle>
            <DialogDescription>
              Logging out will end your current session and you'll be redirected
              to the login page. Are you sure you want to proceed?
            </DialogDescription>
          </DialogHeader>
          <DialogFooter>
            <Button
              type="submit"
              className="bg-black border-0 hover:bg-[#27272a] text-red-400"
              onClick={() => {
                localStorage.removeItem("currentUser");
                navigate("/");
              }}
            >
              Log out
            </Button>
          </DialogFooter>
        </DialogContent>
      </Dialog>

      <SideBarContainer>
        <SbarLogo>{isSmallScreen ? "M" : "Memestagram"}</SbarLogo>
        <ListItem
          onClick={() => {
            navigate("/Home");
          }}
        >
          <AiFillHome style={iconstyle} />
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/Chat");
          }}
        >
          <FaFacebookMessenger style={iconstyle} />
          <ListItemText>Chat</ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/Profile");
          }}
        >
          <CgProfile style={iconstyle} />
          <ListItemText>Profile</ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/Create");
          }}
        >
          <BiImageAdd style={iconstyle} />
          <ListItemText>Create</ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/Notifications");
          }}
        >
          <AiOutlineHeart style={iconstyle} />
          <ListItemText>Notifications</ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            navigate("/Settings");
          }}
        >
          <AiFillSetting style={iconstyle} />
          <ListItemText>Settings</ListItemText>
        </ListItem>
        <ListItem
          onClick={() => {
            setLogoutDialog(true);
          }}
        >
          <FiLogOut style={{ ...iconstyle, color: "salmon" }} />
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </SideBarContainer>
    </>
  );
};

export default Sidebar;
