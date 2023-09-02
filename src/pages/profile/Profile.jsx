import Sidebar from "@/src/layout/Sidebar";
import BottomNavBar from "@/src/layout/BottomNavBar";
import UserIcon from "@/src/Components/UserIcon";
import { Button } from "@/components/ui/button";
import { useLocation } from "react-router-dom";
import { useEffect, useState } from "react";
import { getUser } from "@/src/util/userApi";
import TopNavBar from "@/src/layout/TopNavBar";

const Profile = () => {
  const location = useLocation();
  const [user, setUser] = useState({});

  const callGetUser = () => {
    getUser(location.state.userId)
      .then((res) => {
        setUser(res.data);
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
                  <div>9</div>
                  <div className="text-[#aeaeae]">Posts</div>
                </div>
                <div className="flex flex-col items-center">
                  <div>9</div>
                  <div className="text-[#aeaeae]">Followers</div>
                </div>
                <div className="flex flex-col items-center">
                  <div>9</div>
                  <div className="text-[#aeaeae]">Following</div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          ""
        )}
        <div className="mt-4 px-1">{`${
          user?.bio?.length ? user?.bio : "No Bio"
        }`}</div>
        <div className="max-[375px]:flex hidden">
          <div className="flex flex-row w-full justify-evenly px-1">
            <div className="flex flex-col items-center">
              <div>9</div>
              <div className="text-[#aeaeae]">Posts</div>
            </div>
            <div className="flex flex-col items-center">
              <div>9</div>
              <div className="text-[#aeaeae]">Followers</div>
            </div>
            <div className="flex flex-col items-center">
              <div>9</div>
              <div className="text-[#aeaeae]">Following</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[600px] max-w-full bg-red-500 overflow-auto border-t border">
        posts
      </div>
      <Sidebar />
      <BottomNavBar />
    </div>
  );
};

export default Profile;
