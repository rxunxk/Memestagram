import Sidebar from "../layout/Sidebar";
import BottomNavBar from "../layout/BottomNavBar";
import { PageContainer } from "../StyledComponents/GlobalSC";

const Create = () => {
  return (
    <PageContainer>
      New Post
      <Sidebar />
      <BottomNavBar />
    </PageContainer>
  );
};

export default Create;
