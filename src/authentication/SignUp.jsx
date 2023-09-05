import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
  CardDescription,
} from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { registerUser } from "../util/authApi";
import { useNavigate } from "react-router-dom";
import { storage } from "../util/firebase";
import { ref, uploadBytes, getDownloadURL } from "firebase/storage";
import { useState } from "react";
import { useForm } from "react-hook-form";

export default function SignUp() {
  const navigate = useNavigate();
  const [signUpDisable, setSignUpDisable] = useState(false);
  const [preview, setPreview] = useState();
  const { register, handleSubmit } = useForm();

  const onSubmit = async (fData) => {
    setSignUpDisable(true);
    if (fData.signUpForm.profilePicture.length) {
      const imageRef = ref(
        storage,
        `profilePics/${fData.signUpForm.profilePicture[0].name}`
      );
      const uploadedImage = await uploadBytes(
        imageRef,
        fData.signUpForm.profilePicture[0]
      );
      getDownloadURL(uploadedImage.ref).then((imageUrl) => {
        console.log(imageUrl);
        registerUser({
          fName: fData.signUpForm.fName,
          lName: fData.signUpForm.lName,
          email: fData.signUpForm.email,
          userName: fData.signUpForm.fName + " " + fData.signUpForm.lName,
          password: fData.signUpForm.password,
          profilePicture: imageUrl,
        })
          .then((res) => {
            console.log(res);
            navigate("/");
          })
          .catch((err) => console.log(err.response));
      });
    } else {
      registerUser({
        fName: fData.signUpForm.fName,
        lName: fData.signUpForm.lName,
        email: fData.signUpForm.email,
        userName: fData.signUpForm.fName + " " + fData.signUpForm.lName,
        password: fData.signUpForm.password,
        profilePicture:
          "https://firebasestorage.googleapis.com/v0/b/memestagram-io.appspot.com/o/profilePics%2Fdefault%20pic.jpg?alt=media&token=b8d6a952-8323-4f41-8726-a046ef389976",
      })
        .then((res) => {
          console.log(res);
          navigate("/");
        })
        .catch((err) => console.log(err.response));
    }
  };

  return (
    <div className="w-screen h-screen flex justify-center items-start bg-black text-white  overflow-auto">
      <Card className="w-[600px] max-w-[95%]  bg-black text-white rounded-md mt-[80px] mb-[70px] border py-2 border-[#27272a]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Create an account</CardTitle>
          <CardDescription>
            Submit this form below to create your account
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="fName">First Name</Label>
            <Input
              className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
              id="name"
              type="text"
              placeholder="First Name"
              {...register("signUpForm.fName", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="fName">Last Name</Label>
            <Input
              className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
              id="name"
              type="text"
              placeholder="Last Name"
              {...register("signUpForm.lName", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("signUpForm.email", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Password</Label>
            <Input
              className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
              id="password"
              type="password"
              placeholder="password"
              {...register("signUpForm.password", {
                required: true,
              })}
            />
          </div>
          <div className="flex flex-col gap-2">
            <Label htmlFor="password">Profile Picture</Label>
            <Input
              className="text-black bg-white w-full"
              id="password"
              type="file"
              {...register("signUpForm.profilePicture", {
                required: true,
                onChange: (e) => {
                  setPreview(URL.createObjectURL(e.target.files[0]));
                },
              })}
            />
          </div>
          <div className="flex w-full justify-center bg-black">
            <img
              src={preview}
              className=" border border-[#333] mt-4 rounded-[10px]"
            />
          </div>
        </CardContent>
        <CardFooter>
          <Button
            className="bg-[#27272a] hover:bg-[#212123] w-full"
            onClick={handleSubmit(onSubmit)}
            disabled={signUpDisable}
          >
            Submit
          </Button>
        </CardFooter>
      </Card>
    </div>
  );
}
