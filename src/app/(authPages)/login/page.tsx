"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { AuthErrorType, AuthStateType } from "@/type";
import Image from "next/image";
import Link from "next/link";
import { useRouter, useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import axios from "axios";
import { signIn, useSession } from "next-auth/react";
const RegistrationPage = () => {
  const { status } = useSession();
  const router = useRouter();
  useEffect(() => {
    if (status === "authenticated") {
      router.push("/");
    }
  }, [status, router]);
  const params = useSearchParams();
  const [authState, setAuthState] = useState<AuthStateType>({
    email: "",
    password: "",
  });
  const [authError, setAuthError] = useState<AuthErrorType>({});
  const [loading, setLoading] = useState<boolean>(false);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setAuthError({});
    setLoading(true);
    axios
      .post("/api/auth/login", authState)
      .then((res) => {
        setLoading(false);
        const response = res.data;
        if (response.status === 200) {
          signIn("credentials", {
            email: authState.email,
            password: authState.password,
            callbackUrl: "/",
            redirect: true,
          });
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
    <div className="h-screen w-screen flex items-center justify-center">
      <div className="w-full lg:w-1/3 mx-2 bg-muted p-6 rounded-lg ">
        <div className="flex justify-center">
          <Image src="/images/logo.svg" width={50} height={50} alt="Logo" />
        </div>
        {params.get("message") && (
          <p className="text-green-500 mt-4">
            <strong>Success!</strong> {params.get("message")}.
          </p>
        )}
        <h1 className="text-2xl font-bold">Login</h1>
        <p>Welcome Back!</p>
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
            <Button disabled={loading} type="submit" className="w-full">
              {loading ? "Processing.." : "Login"}
            </Button>
          </div>
        </form>
        <div className="mt-5">
          <span>Do not have an account ?</span>{" "}
          <Link href="/registration" className="text-orange-400 font-bold">
            Registration
          </Link>
        </div>
      </div>
    </div>
  );
};

export default RegistrationPage;
