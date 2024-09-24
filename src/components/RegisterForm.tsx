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

export default function RegisterForm() {
  const { signInWithGoogle, signUp } = useAuth();

  const registerSchema = z.object({
    firstName: z.string().min(1, { message: "Please provide an First Name" }),
    lastName: z.string().min(1, { message: "Please provide an Last Name" }),
    email: z
      .string()
      .min(1, { message: "Please provide an email" })
      .email({ message: "Please provide a valid email" }),
    password: z
      .string()
      .min(6, { message: "Please enter 6 character password" }),
  });

  const form = useForm<z.infer<typeof registerSchema>>({
    resolver: zodResolver(registerSchema),
    defaultValues: { firstName: "", lastName: "", email: "", password: "" },
  });

  function onSubmit(values: z.infer<typeof registerSchema>) {
    const displayName = `${values.firstName} ${values.lastName}`;
    signUp(values.email, values.password, displayName);
  }

  return (
    <Form {...form}>
      <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-8">
        <FormInput
          form={form}
          name="firstName"
          label="First Name"
          placeholder="John"
          type="text"
        />
        <FormInput
          form={form}
          name="lastName"
          label="Last Name"
          placeholder="Doe"
          type="text"
        />
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

        <div className="flex justify-around">
          <Link
            href="/login"
            className="cursor-pointer py-3 font-[0.7rem] text-gray-500 transition-colors hover:text-red-500"
          >
            Sign In
          </Link>
        </div>
        <div className="text-center">
          <Button type="submit" variant="destructive" className="mb-5 w-full">
            Register
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
