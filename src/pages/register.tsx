import { useNavigate } from "react-router-dom";
import * as z from "zod";
import { registerSchema } from "@/schemas/auth";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import TuliaLogo from "../assets/logo/tuliahub.svg?react";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import ControllerInput from "@/components/controller-input";
import { FieldGroup } from "@/components/ui/field";
import FormFooter from "@/components/form-footer";
import { useRegister } from "@/hooks/use-auth";

const Register = () => {
  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      gender: undefined,
      phoneNumber: "",
      email: "",
      password: "",
    },
  });
  const {mutateAsync: handleRegister, isPending} = useRegister()
  const navigate = useNavigate();

  const onSubmit = (data: z.infer<typeof registerSchema>) => {
    const payload = {
      name: `${data.firstName} ${data.lastName}`.trim(),
      gender: data.gender,
      password: data.password,
      phoneNumber: data.phoneNumber,
      email: data.email
    }

    console.log(payload);
    handleRegister(payload, {
      onSuccess: () => {
        navigate("/")
        form.reset()
      }
    })
  };

  return (
    <div className="min-h-screen mx-auto flex items-center justify-center p-2">
      <Card className="w-full max-w-md">
        <CardHeader className="flex flex-col items-center">
          <div
            className="flex items-center gap-1 cursor-pointer mb-10"
            onClick={() => navigate("/")}
          >
            <TuliaLogo className="h-6 w-auto" />
            <span className="text-xl font-semibold">TuliaHub</span>
          </div>
          <CardTitle className="text-2xl">Register</CardTitle>
        </CardHeader>

        <CardContent>
          <form id="registerForm" onSubmit={form.handleSubmit(onSubmit)}>
            <FieldGroup>
              <ControllerInput
                name="firstName"
                control={form.control}
                label="First name"
                placeholder="John"
              />

              <ControllerInput
                name="lastName"
                control={form.control}
                label="Last name"
                placeholder="Doe"
              />

              <ControllerInput
                name="gender"
                control={form.control}
                label="Gender"
                placeholder="Select your gender"
                options={[
                  { label: "Male", value: "MALE" },
                  { label: "Female", value: "FEMALE" },
                ]}
                type="select"
              />

              <ControllerInput
                name="phoneNumber"
                control={form.control}
                label="Phone number"
                placeholder="255123456789"
              />

              <ControllerInput
                name="email"
                control={form.control}
                label="Email"
                placeholder="john@example.com"
              />

              <ControllerInput
                name="password"
                control={form.control}
                label="Password"
                placeholder="••••••••"
                description="Password must be at least 6 characters, with uppercase, lowercase, number, and special character."
              />
            </FieldGroup>
          </form>
        </CardContent>

        <CardFooter>
          <FormFooter
            buttonLabel="Register"
            linkForm="registerForm"
            description="Already have an account?"
            to="/login"
            linkLabel="Login"
            isLoading={isPending}
            loadingLabel="Registering..."
          />
        </CardFooter>
      </Card>
    </div>
  );
};

export default Register;
