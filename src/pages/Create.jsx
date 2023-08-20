import Sidebar from "../layout/Sidebar";
import BottomNavBar from "../layout/BottomNavBar";
import { PageContainer } from "../StyledComponents/GlobalSC";
import { useForm } from "react-hook-form";
import TopNavBar from "../layout/TopNavBar";

const Create = () => {
  const { register } = useForm();

  return (
    <PageContainer>
      <TopNavBar />
      <Sidebar />
      <div>
        <label>Image</label>
        <input
          type="file"
          {...register("newPost.image", {
            required: true,
          })}
        />
        <label>Caption</label>
        <input
          type="text"
          {...register("newPost.caption", {
            required: true,
          })}
        />
      </div>

      <BottomNavBar />
    </PageContainer>
  );
};

export default Create;
