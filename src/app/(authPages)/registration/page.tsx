/* eslint-disable react/no-unescaped-entities */
"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthErrorType, AuthStateType } from "@/type";
import axios from "axios";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";
const LoginPage = () => {
  const router = useRouter();
  const [authState, setAuthState] = useState<AuthStateType>({
    name: "",
    email: "",
    username: "",
    password: "",
    password_confirmation: "",
  });
  const [authError, setAuthError] = useState<AuthErrorType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    axios
      .post("/api/auth/registration", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status === 200) {
          router.push(`/login?message=${response.message}`);
        } else if (response.status === 400) {
          setAuthError(response.error);
        }
      })
      .catch((err) => {
        setLoading(false);
        console.log("The error is", err);
      });
  };
  return (
    <div className=" flex items-center justify-center my-10">
      <div className="w-full lg:w-1/3 mx-2 bg-muted p-6 rounded-lg ">
        <div className="flex justify-center">
          <Image src="/images/logo.svg" width={50} height={50} alt="Logo" />
        </div>
        <h1 className="text-2xl font-bold">Registration</h1>
        <p>Welcome to the Threads</p>
        <form onSubmit={handleSubmit}>
          <div className="mt-5">
            <Label htmlFor="email">Email</Label>
            <Input
              name="email"
              type="text"
              id="email"
              placeholder="Enter your email"
              onChange={(e) =>
                setAuthState({ ...authState, email: e.target.value })
              }
            />
            <span className="text-red-400">{authError?.email}</span>
          </div>
          <div className="mt-5">
            <Label htmlFor="name">Name</Label>
            <Input
              name="name"
              type="text"
              id="name"
              placeholder="Enter your name"
              onChange={(e) =>
                setAuthState({ ...authState, name: e.target.value })
              }
            />
            <span className="text-red-400">{authError?.name}</span>
          </div>
          <div className="mt-5">
            <Label htmlFor="username">username</Label>
            <Input
              name="username"
              type="text"
              id="username"
              placeholder="Enter your username"
              onChange={(e) =>
                setAuthState({ ...authState, username: e.target.value })
              }
            />
            <span className="text-red-400">{authError?.username}</span>
          </div>
          <div className="mt-5">
            <Label htmlFor="password">Password</Label>
            <Input
              name="password"
              type="password"
              id="password"
              placeholder="Enter your password"
              onChange={(e) =>
                setAuthState({ ...authState, password: e.target.value })
              }
            />
            <span className="text-red-400">{authError?.password}</span>
          </div>
          <div className="mt-5">
            <Label htmlFor="password_confirmation">Password_confirmation</Label>
            <Input
              name="password_confirmation"
              type="password_confirmation"
              id="password_confirmation"
              placeholder="Enter your password_confirmation"
              onChange={(e) =>
                setAuthState({
                  ...authState,
                  password_confirmation: e.target.value,
                })
              }
            />
          </div>
          <div className="mt-5">
            <Button disabled={loading} type="submit" className="w-full">
              {loading ? "Processing" : "Registration"}
            </Button>
          </div>
        </form>
        <div className="mt-5">
          <span>Don't have and account ?</span>{" "}
          <Link href="/login" className="text-orange-400 font-bold">
            Login
          </Link>
        </div>
      </div>
    </div>
  );
};

export default LoginPage;
