/* eslint-disable react/no-unescaped-entities */
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
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "../redux/slices/currentUser";
import { useEffect, useState } from "react";
import { getCurrentUser } from "../util/utilFunctions";
import { useForm } from "react-hook-form";
import { loginUser } from "../util/authApi";

export default function SignIn() {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [signInDisable, setSignInDisable] = useState(false);
  const { register, handleSubmit } = useForm();

  useEffect(() => {
    const currentUser = getCurrentUser();
    if (currentUser) {
      dispatch(setCurrentUser(currentUser));
      navigate("/Home");
    }
  }, []);

  const onSubmit = (fData) => {
    setSignInDisable(true);
    loginUser({
      email: fData.signInForm.email,
      password: fData.signInForm.password,
    })
      .then((res) => {
        if (res) {
          localStorage.setItem("currentUser", JSON.stringify(res.data));
          dispatch(setCurrentUser(res.data));
          navigate("/Home");
        }
      })
      .catch((err) => console.log(err.response.data));
  };

  return (
    <div className="w-screen h-screen flex justify-center items-start bg-black text-white  overflow-auto">
      <Card className="w-[600px] max-w-[95%]  bg-black text-white rounded-md mt-[80px] mb-[70px] border py-2 border-[#27272a]">
        <CardHeader className="space-y-1">
          <CardTitle className="text-2xl">Sign In</CardTitle>
          <CardDescription>
            Enter your email & password to login to Memestagram
          </CardDescription>
        </CardHeader>
        <CardContent className="flex flex-col gap-2">
          <div className="flex flex-col gap-2">
            <Label htmlFor="email">Email</Label>
            <Input
              className="text-[#a1a1aa] w-full bg-black border border-[#27272a] mb-2"
              id="email"
              type="email"
              placeholder="m@example.com"
              {...register("signInForm.email", {
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
              {...register("signInForm.password", {
                required: true,
              })}
            />
          </div>
        </CardContent>
        <CardFooter>
          <div className="flex flex-col gap-2 w-full">
            <Button
              className="bg-[#27272a] hover:bg-[#212123] w-full"
              onClick={handleSubmit(onSubmit)}
              disabled={signInDisable}
            >
              Login
            </Button>
            <div className="flex justify-end">
              <div
                className="cursor-pointer hover:text-[#c1c1c1]"
                onClick={() => {
                  navigate("/SignUp");
                }}
              >
                Don't have an account? Sign Up
              </div>
            </div>
          </div>
        </CardFooter>
      </Card>
    </div>
  );
}
