"use client";
import Typography from "@/components/Typography";
import { UserContext } from "@/context/UserDetailContext";
import Link from "next/link";
import { useContext } from "react";
import { IoChevronForward } from "react-icons/io5";

export default function BreadCrumb() {
  const { name } = useContext(UserContext);
  return (
    <div className="flex gap-3 items-center">
      <Link href="/">
        <Typography
          variant="body"
          className="cursor-pointer text-slate-600 hover:underline"
        >
          User list
        </Typography>
      </Link>
      <IoChevronForward />
      <Typography variant="body">{name}</Typography>
    </div>
  );
}
