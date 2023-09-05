import Sidebar from "../layout/Sidebar";
import BottomNavBar from "../layout/BottomNavBar";
import { useForm } from "react-hook-form";
import TopNavBar from "../layout/TopNavBar";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { storage } from "../util/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { createPost } from "../util/postApi";
// import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { getCurrentUser } from "../util/utilFunctions";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const Create = () => {
  const { register, handleSubmit } = useForm();
  const currentUser = getCurrentUser();
  const [submitDisable, setSubmitDisable] = useState(false);
  const [preview, setPreview] = useState();
  const navigate = useNavigate();

  const onSubmit = async (fData) => {
    setSubmitDisable(true);

    const imageRef = ref(storage, `posts/${fData.newPostForm.media[0].name}`);
    const uploadedImage = await uploadBytes(
      imageRef,
      fData.newPostForm.media[0]
    );
    getDownloadURL(uploadedImage.ref).then((imageUrl) => {
      createPost({
        title: fData.newPostForm.title,
        caption: fData.newPostForm.caption || "",
        img: imageUrl,
        userId: currentUser._id,
        author: currentUser.userName,
        authorProfilePic: currentUser.profilePicture,
      })
        .then((res) => {
          navigate("/Home");
          console.log(res);
        })
        .catch((err) => console.log("Error occured: ", err));
    });
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-start bg-black text-white  overflow-auto">
        <TopNavBar />
        <Sidebar />
        <BottomNavBar />
        <Card className="w-[600px] max-w-[95%]  bg-black text-white rounded-md mt-[80px] mb-[70px] border py-2 border-[#27272a]">
          <CardHeader>
            <CardTitle>Create New Post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="">
              <Label>Title</Label>
              <Input
                className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
                placeholder="Post Title"
                type="text"
                {...register("newPostForm.title", {
                  required: true,
                })}
              />
              <Label className="mt-2">Caption</Label>
              <Input
                className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
                placeholder="Post Caption"
                type="text"
                {...register("newPostForm.caption")}
              />
              <Label className="mt-4">Choose Media</Label>
              <Input
                className="text-black bg-white w-full"
                type="file"
                {...register("newPostForm.media", {
                  required: true,
                  onChange: (e) => {
                    setPreview(URL.createObjectURL(e.target.files[0]));
                  },
                })}
              />
              <div className="flex w-full justify-center bg-black">
                <img
                  src={preview}
                  className=" border border-[#333] mt-4 rounded-[10px]"
                />
              </div>
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="bg-black color-white border border-[#27272a] hover:bg-[#27272a] hover:text-[#fafafa]"
              variant="outline"
              onClick={handleSubmit(onSubmit)}
              disabled={submitDisable}
            >
              Submit
            </Button>
          </CardFooter>
        </Card>
      </div>
    </>
  );
};

export default Create;
