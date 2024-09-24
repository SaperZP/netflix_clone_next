"use client";
import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useForm } from "react-hook-form";
import { z } from "zod";
import FormInput from "./FormInput";
import { Button } from "./ui/button";
import { Form } from "./ui/form";

import GoogleIcon from "@/app/icons/GoogleIcon";
import { useAuth } from "@/context/AuthContext";

export default function LoginForm() {
  const { signInWithGoogle, signIn, resetPassword } = useAuth();

  const loginSchema = z.object({
    email: z
      .string()
      .min(1, { message: "Please provide an email" })
      .email({ message: "Please provide a valid email" }),
    password: z
      .string()
      .min(6, { message: "Please enter 6 character password" }),
  });

  const form = useForm<z.infer<typeof loginSchema>>({
    resolver: zodResolver(loginSchema),
    defaultValues: { email: "", password: "" },
  });

  function onSubmit(values: z.infer<typeof loginSchema>) {
    signIn(values.email, values.password);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInput
          form={form}
          name="email"
          label="Email"
          placeholder="John@email.com"
          type="email"
        />
        <FormInput
          form={form}
          name="password"
          label="Password"
          placeholder="******"
          type="password"
        />

        <div className="flex justify-between">
          <span
            className="cursor-pointer py-3 font-[0.7rem] text-gray-500 transition-colors hover:text-red-500"
            onClick={() => resetPassword(form.getValues("email"))}
          >
            Forgot Password
          </span>
          <Link
            href="/register"
            className="cursor-pointer py-3 font-[0.7rem] text-gray-500 transition-colors hover:text-red-500"
          >
            Sign Up
          </Link>
        </div>
        <div className="text-center">
          <Button type="submit" variant="destructive" className="mb-5 w-full">
            Login
          </Button>
          <Button
            onClick={() => signInWithGoogle()}
            type="button"
            variant="destructive"
            className="flex w-full items-center justify-between"
          >
            <span>Continue with Google</span>
            <GoogleIcon />
          </Button>
        </div>
      </form>
    </Form>
  );
}
