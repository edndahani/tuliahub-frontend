import TuliaLogo from "../assets/logo/tuliahub.svg?react";
import { useNavigate } from "react-router-dom";
import { useLoginUser } from "@/hooks/use-auth";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema } from "@/schemas/auth";
import * as z from "zod";
import { FieldGroup } from "@/components/ui/field";
import ControllerInput from "@/components/controller-input";
import FormFooter from "@/components/form-footer";

const Login = () => {
  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { phoneNumber: "", password: "" },
  });
  const navigate = useNavigate();
  const { mutateAsync: handleLogin, isPending } = useLoginUser();

  const onSubmit = (payload: z.infer <typeof loginSchema>) => {
    handleLogin(payload, {
      onSuccess: () => {
        navigate("/")
        form.reset()
      }
    })
  };

  return (
    <div className="w-full max-w-md">
      <Card className="w-full">
        <CardHeader className="flex flex-col items-center">
          <div
            className="flex items-center gap-1 cursor-pointer mb-10"
            onClick={() => navigate("/")}
          >
            <TuliaLogo className="h-6 w-auto" />
            <span className="text-xl font-semibold">TuliaHub</span>
          </div>
          <CardTitle className="text-2xl">Log in</CardTitle>
        </CardHeader>

        <CardContent>
          <form id="loginForm" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <ControllerInput
                name="phoneNumber"
                control={form.control}
                label="Phone number"
                placeholder="255123456789"
              />

              <ControllerInput
                name="password"
                control={form.control}
                label="Password"
                placeholder="••••••••"
              />
            </FieldGroup>
          </form>
        </CardContent>
          
        <CardFooter>
          <FormFooter
            buttonLabel="Log in"
            description="Don't have an account?"
            linkForm="loginForm"
            linkLabel="Register"
            to="/register"
            isLoading={isPending}
            loadingLabel="Logging in..."
          />
        </CardFooter>
      </Card>
      {/* <div
        className="flex items-center gap-1 cursor-pointer mb-10"
        onClick={() => navigate("/")}
      >
        <TuliaLogo className="h-6 w-auto" />
        <span className="text-xl font-semibold">TuliaHub</span>
      </div>
      <p className="text-2xl font-semibold mb-5">Sign in</p>
      <form onSubmit={handleSubmit} className="flex flex-col mb-5">
        <label className="flex flex-col gap-2 mb-5">
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
            type="password"
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
      </section> */}
    </div>
  );
};

export default Login;
