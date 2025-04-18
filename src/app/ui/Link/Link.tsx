"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

interface ILinkComp {
  href: string;
  text: string;
}

export default function LinkComp({ href, text }: ILinkComp) {
  const pathName = usePathname();

  return (
    <Link style={pathName === href ? { background: "red" } : {}} href={href}>
      {text}
    </Link>
  );
}
