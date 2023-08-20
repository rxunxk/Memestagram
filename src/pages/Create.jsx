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
import { useSelector } from "react-redux";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const Create = () => {
  const { register, handleSubmit } = useForm();
  const currentUser = useSelector((state) => state.currentUser);

  const onSubmit = async (fData) => {
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
      })
        .then((res) => console.log(res))
        .catch((err) => console.log("Error occured: ", err.response));
    });
  };

  return (
    <>
      <div className="h-screen w-screen flex flex-col items-center justify-center bg-black text-white">
        <TopNavBar />
        <Sidebar />
        <BottomNavBar />
        <Card className=" bg-black text-white rounded-md">
          <CardHeader>
            <CardTitle>Create New Post</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="w-[600px] max-w-[80%]">
              <Label>Title</Label>
              <Input
                className="text-black w-[100%]"
                placeholder="Post Title"
                type="text"
                {...register("newPostForm.title", {
                  required: true,
                })}
              />
              <Label>Caption</Label>
              <Input
                className="text-black w-max"
                placeholder="Post Caption"
                type="text"
                {...register("newPostForm.caption")}
              />
              <Label>Choose Media</Label>
              <Input
                className="text-black w-max"
                type="file"
                {...register("newPostForm.media", {
                  required: true,
                })}
              />
            </div>
          </CardContent>
          <CardFooter>
            <Button
              className="bg-black color-white"
              onClick={handleSubmit(onSubmit)}
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
