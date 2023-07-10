import { AiFillSetting, AiFillHome, AiOutlineHeart } from "react-icons/ai";
import { CgProfile } from "react-icons/cg";
import { FiLogOut } from "react-icons/fi";
import { BiImageAdd } from "react-icons/bi";
import { FaFacebookMessenger } from "react-icons/fa";
import { useState, useEffect } from "react";
import {
  SideBarContainer,
  Logo,
  ListItem,
  ListItemText,
} from "../StyledComponents/FromStyledComponents";

const iconstyle = {
  height: "24px",
  width: "24px",
  marginRight: "10px",
  flexShrink: 0,
};

const Sidebar = () => {
  const [isSmallScreen, setIsSmallScreen] = useState(false);

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
      <SideBarContainer>
        <Logo>{isSmallScreen ? "M" : "Memestagram"}</Logo>
        <ListItem>
          <AiFillHome style={iconstyle} />
          <ListItemText>Home</ListItemText>
        </ListItem>
        <ListItem>
          <FaFacebookMessenger style={iconstyle} />
          <ListItemText>Chat</ListItemText>
        </ListItem>
        <ListItem>
          <CgProfile style={iconstyle} />
          <ListItemText>Profile</ListItemText>
        </ListItem>
        <ListItem>
          <BiImageAdd style={iconstyle} />
          <ListItemText>Create</ListItemText>
        </ListItem>
        <ListItem>
          <AiOutlineHeart style={iconstyle} />
          <ListItemText>Notifications</ListItemText>
        </ListItem>
        <ListItem>
          <AiFillSetting style={iconstyle} />
          <ListItemText>Settings</ListItemText>
        </ListItem>
        <ListItem>
          <FiLogOut style={{ ...iconstyle, color: "salmon" }} />
          <ListItemText>Logout</ListItemText>
        </ListItem>
      </SideBarContainer>
    </>
  );
};

export default Sidebar;
