import Sidebar from "../layout/Sidebar";
import Stories from "../Components/Stories";
import Posts from "../Components/Posts";
import BottomNavBar from "../layout/BottomNavBar";
import { PageContainer } from "../StyledComponents/GlobalSC";
import TopNavBar from "../layout/TopNavBar";
import { useSelector } from "react-redux";

const Home = () => {
  const user = useSelector((state) => state.currentUser);
  console.log(user);
  return (
    <>
      <PageContainer>
        <TopNavBar />
        <Sidebar />
        <Stories />
        <Posts />
        <BottomNavBar />
      </PageContainer>
    </>
  );
};

export default Home;
