import Sidebar from "../layout/Sidebar";
import styled from "@emotion/styled";
import Stories from "../Components/Stories";
import Posts from "../Components/Posts";
import BottomNavBar from "../layout/BottomNavBar";

const HomeContainer = styled.div`
  height: 100dvh;
  width: 100dvw;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: black;
  color: white;
  overflow-y: scroll;
`;

const Home = () => {
  return (
    <>
      <HomeContainer>
        <Sidebar />
        <Stories />
        <Posts />
        <BottomNavBar />
      </HomeContainer>
    </>
  );
};

export default Home;
