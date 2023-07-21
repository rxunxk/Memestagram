import { BNContainer } from "../StyledComponents/BottomNavBarSC";
import { HeartIcon } from "../StyledComponents/PostsStyledComponents";
import {
  ChatIcon,
  SettingsIcon,
  CreateIcon,
  HomeIcon,
} from "../StyledComponents/GlobalSC";
import UserIcon from "../Components/UserIcon";

const BottomNavBar = () => {
  return (
    <BNContainer>
      <HomeIcon height={25} width={25} />
      <ChatIcon height={25} width={25} />
      <HeartIcon height={25} width={25} />
      <CreateIcon height={25} width={25} />
      <SettingsIcon height={25} width={25} />
      <UserIcon height={25} width={25} />
    </BNContainer>
  );
};

export default BottomNavBar;
