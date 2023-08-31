import { BNContainer } from "../StyledComponents/BottomNavBarSC";
import { LikedIcon } from "../StyledComponents/PostsStyledComponents";
import {
  ChatIcon,
  SettingsIcon,
  CreateIcon,
  HomeIcon,
} from "../StyledComponents/GlobalSC";
import UserIcon from "../Components/UserIcon";
import { useNavigate } from "react-router-dom";
import { getCurrentUser } from "../util/utilFunctions";

const BottomNavBar = () => {
  const navigate = useNavigate();
  const currentUser = getCurrentUser();

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
      <LikedIcon
        height={25}
        width={25}
        style={{ color: "white" }}
        onClick={() => {
          navigate("/Home");
        }}
      />
      <CreateIcon
        height={25}
        width={25}
        onClick={() => {
          navigate("/Create");
        }}
      />
      <SettingsIcon
        height={25}
        width={25}
        onClick={() => {
          navigate("/Settings");
        }}
      />
      <UserIcon
        height={25}
        width={25}
        onClick={() => {
          navigate("/Profile");
        }}
        src={currentUser.profilePicture}
      />
    </BNContainer>
  );
};

export default BottomNavBar;
