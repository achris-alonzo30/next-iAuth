import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { LoginButton } from "@/components/auth/login-button";
import Image from "next/image";

const font = Poppins({
  subsets: ["latin"],
  weight: ["600"],
});
export default function Home() {
  return (
    <main className="flex h-full flex-col items-center justify-center">
      <div className="space-y-6 text-center">
        <h1
          className={cn(
            "text-6xl font-semibold text-white drop-shadow-md inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#00091D] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent gap-2 text-center items-center justify-center",
            font.className
          )}
        >
          <Image src="/icons/lock.svg" alt="lock-icon" height="70" width="70" />
          iAuth
        </h1>
        <p className="text-gray-400 text-lg truncate">
          Building authentication has never been smoother with the iAuth app
          powered by Next.js!
        </p>
        <div>
          {/* You can add mode="modal" to LoginButton if you want to use it in a modal */}
          <LoginButton asChild>
            <Button
              variant="secondary"
              size="lg"
              className="text-semibold transform hover:-translate-y-1 transition duration-400"
            >
              Sign In
            </Button>
          </LoginButton>
        </div>
      </div>
    </main>
  );
}
