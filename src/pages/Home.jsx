import Sidebar from "../layout/Sidebar";
import Stories from "../Components/Stories";
import PostsList from "../Components/PostsList";
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
        <PostsList />
        <BottomNavBar />
      </PageContainer>
    </>
  );
};

export default Home;
