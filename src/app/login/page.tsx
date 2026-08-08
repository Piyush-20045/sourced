import LoginHero from "@/app/login/_components/login-hero";
import LoginForm from "@/app/login/_components/login-form";
import LoginFooter from "@/app/login/_components/login-footer";

export const metadata = {
  title: "Sign In - Sourced",
  description: "Sign in to access your professional dashboard on Sourced.",
};

export default function LoginPage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      {/* Main layout grid: Hero visual on the left, Form on the right */}
      <main className="grid flex-1 lg:grid-cols-2">
        <LoginHero />
        <LoginForm />
      </main>

      {/* Dedicated Login Footer */}
      <LoginFooter />
    </div>
  );
}
