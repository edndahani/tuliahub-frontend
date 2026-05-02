import React, { useState } from "react";
import TuliaLogo from "../assets/logo/tuliahub.svg?react";
import { useNavigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { useLoginUser } from "@/hooks/use-auth";

const Login = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({ phoneNumber: "", password: "" });
  const { mutateAsync: handleLogin, isPending, isError, error } = useLoginUser();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    await handleLogin(formData);
    setFormData({ phoneNumber: "", password: "" });
    navigate("/");
  };

  return (
    <div className="max-w-lg min-h-[98vh] mt-1.5 rounded-md shadow border mx-auto flex flex-col items-center p-10">
      <div
        className="flex items-center gap-1 cursor-pointer mb-10"
        onClick={() => navigate("/")}
      >
        <TuliaLogo className="h-6 w-auto" />
        <span className="text-xl font-semibold">TuliaHub</span>
      </div>
      <p className="text-2xl font-semibold mb-5">Sign in</p>
      <form onSubmit={handleSubmit} className="flex flex-col mb-5">
        <label className="flex flex-col gap- mb-5">
          <span className="text-sm font-semibold">Phone number</span>
          <input
            className="border w-80 px-4 py-2 rounded-md"
            type="text"
            name="phoneNumber"
            value={formData.phoneNumber}
            onChange={handleChange}
            required
          />
        </label>
        <label className="flex flex-col gap-2 mb-6">
          <span className="text-sm font-semibold">Password</span>
          <input
            className="border w-80 px-4 py-2 rounded-md"
            type="text"
            name="password"
            value={formData.password}
            onChange={handleChange}
            required
          />
        </label>
        <Button disabled={isPending} className="py-5">
          {isPending ? "Signing in..." : "Sign in"}
        </Button>
      </form>
      <section className="flex gap-2 items-center">
        <p className="text-[15px]">Don't have an account?</p>
        <a
          href=""
          className="text-[15px] text-primary"
          onClick={() => navigate("/register")}
        >
          Create account
        </a>
      </section>
    </div>
  );
};

export default Login;
