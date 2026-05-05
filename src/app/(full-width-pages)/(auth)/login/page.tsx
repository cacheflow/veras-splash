import SignInForm from "@/components/auth/SignInForm";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Login",
  description: "This is the login page",
};

export default function SignIn() {
  return <SignInForm />;
}
