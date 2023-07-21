import { BNContainer } from "../StyledComponents/BottomNavBarSC";
import { HeartIcon } from "../StyledComponents/PostsStyledComponents";
import {
  ChatIcon,
  SettingsIcon,
  CreateIcon,
  HomeIcon,
} from "../StyledComponents/GlobalSC";
import UserIcon from "../Components/UserIcon";
import { useNavigate } from "react-router-dom";

const BottomNavBar = () => {
  const navigate = useNavigate();

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
      <HeartIcon
        height={25}
        width={25}
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
      />
    </BNContainer>
  );
};

export default BottomNavBar;
