import LoginHero from "@/app/login/_components/login-hero";
import SignupForm from "@/app/signup/_components/signup-form";
import LoginFooter from "@/app/login/_components/login-footer";

export const metadata = {
  title: "Create an Account - Sourced",
  description:
    "Create an account to join the world's premier freelance network.",
};

export default function SignupPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Main layout grid: Hero visual on the left, Form on the right */}
      <main className="grid flex-1 lg:grid-cols-2">
        <LoginHero />
        <SignupForm />
      </main>

      {/* Shared Auth Footer */}
      <LoginFooter />
    </div>
  );
}
