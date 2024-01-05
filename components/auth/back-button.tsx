"use client";

import Link from "next/link";
import { Button } from "../ui/button";

interface BackButtonProps {
  label: string;
  href: string;
}

const BackButton: React.FC<BackButtonProps> = ({ label, href }: BackButtonProps) => {
  return (
    <Button className="w-full font-normal" asChild size="sm" variant="link">
      <Link href={href} >{label}</Link>
    </Button>
  );
};

export default BackButton;
