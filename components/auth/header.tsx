import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";
import Image from "next/image";

const font = Poppins({
  weight: ["600"],
  subsets: ["latin"],
});

interface HeaderProps {
  label: string;
}

export const Header = ({ label }: HeaderProps) => {
  return (
    <div className="w-full flex flex-col gap-y-4 items-center justify-center">
      <h1 className={cn("text-3xl font-semibold inline-flex animate-text-gradient bg-gradient-to-r from-[#b2a8fd] via-[#00091D] to-[#c7d2fe] bg-[200%_auto] bg-clip-text text-transparent gap-1 text-center items-center justify-center", font.className)}><Image src="/icons/lock.svg" alt="lock-icon" height={40} width={40}/> iAuth</h1>
      <p className="text-muted-foreground text-sm">{label}</p>
    </div>
  );
};
