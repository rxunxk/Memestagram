import Sidebar from "@/src/layout/Sidebar";
import BottomNavBar from "@/src/layout/BottomNavBar";
import UserIcon from "@/src/Components/UserIcon";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "@/src/util/userApi";
import TopNavBar from "@/src/layout/TopNavBar";
import { getPostsOfThisUser } from "@/src/util/postApi";
import { PostSkeleton } from "@/src/skeleton/PostSkeleton";

const Profile = () => {
  const location = useLocation();
  const [user, setUser] = useState({});
  const [posts, setPosts] = useState([]);

  const callGetUser = () => {
    getUser(location.state.userId)
      .then((res) => {
        setUser(res.data);
        callGetPostsOfThisUser(res.data._id);
      })
      .catch((err) => console.log(err));
  };

  const callGetPostsOfThisUser = (userId) => {
    getPostsOfThisUser(userId)
      .then((res) => {
        setPosts(res.data);
      })
      .catch((err) => console.log(err));
  };

  useEffect(() => {
    callGetUser();
  }, []);

  return (
    <div className="h-screen w-screen flex flex-col items-center bg-black text-white">
      <TopNavBar />
      <div className="w-[600px] max-w-full mt-[75px] px-1">
        {Object.keys(user) ? (
          <div className="flex gap-4 mt-4">
            <div className="shrink-0">
              <UserIcon
                height={100}
                width={100}
                src={user.profilePicture}
                cursor={"pointer"}
              />
            </div>
            <div className="flex flex-col gap-2 w-full">
              <div className="flex items-center justify-center gap-4 max-[300px]:flex-col">
                <div className="text-[1.3rem]">{`${user.fName} ${user.lName}`}</div>
                <Button className="bg-[#0e92f1] h-9 hover:bg-[#0a6bb1] ">
                  Follow
                </Button>
              </div>
              <div className="flex gap-8 justify-center max-[375px]:hidden">
                <div className="flex flex-col items-center">
                  <div>{posts?.length}</div>
                  <div className="text-[#aeaeae]">Posts</div>
                </div>
                <div className="flex flex-col items-center">
                  <div>{user?.followers?.length}</div>
                  <div className="text-[#aeaeae]">Followers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div>{user?.followers?.length}</div>
                  <div className="text-[#aeaeae]">Following</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        {user?.bio?.length ? (
          <div className="px-1 my-4">{user?.bio}</div>
        ) : (
          <div className="text-[#aeaeae] mt-4 px-1"> No Bio</div>
        )}
        <div className="max-[375px]:flex hidden border-t border-[#333] mt-2 py-2">
          <div className="flex flex-row w-full justify-evenly px-1">
            <div className="flex flex-col items-center">
              <div>{posts?.length}</div>
              <div className="text-[#aeaeae]">Posts</div>
            </div>
            <div className="flex flex-col items-center">
              <div>{user?.followers?.length}</div>
              <div className="text-[#aeaeae]">Followers</div>
            </div>
            <div className="flex flex-col items-center">
              <div>{user?.followers?.length}</div>
              <div className="text-[#aeaeae]">Following</div>
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-3 gap-2 w-[600px] max-w-full overflow-auto">
        {posts?.length ? (
          posts.map((post, index) => {
            return (
              <img
                src={post.img}
                key={index}
                className="hover:opacity-50 cursor-pointer border border-[#333]"
              />
            );
          })
        ) : (
          <PostSkeleton />
        )}
      </div>
      <Sidebar />
      <BottomNavBar />
    </div>
  );
};

export default Profile;
