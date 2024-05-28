"use client";
import { useParams } from "next/navigation";
import Typography from "../Typography";
import Link from "next/link";
import { Menu } from "lucide-react";
import MobileNavigation from "./MobileNavigation";
import { useState } from "react";

export default function Headers() {
  const params = useParams();
  const id = params.userId;
  const [openMobileMenu, setOpenMobileMenu] = useState(false);

  const linkData = [
    {
      title: "Personal detail",
      link: `/${id}`,
    },
    {
      title: "Post",
      link: `/${id}/post`,
    },
    {
      title: "Dashboard",
      link: `/${id}/dashboard`,
    },
    {
      title: "Todo",
      link: `/${id}/todo`,
    },
  ];
  return (
    <>
      <header className="fixed  top-0 left-0 right-0 bg-slate-600 h-16 border-b  flex items-center justify-between px-[20px] sm:px-8 z-[99] ">
        <div className="flex items-center justify-center w-full relative">
          {/* <Typography
          variant="body"
          className="font-bold absolute left-0 text-white cursor-pointer"
        >
          <Link href={`/${id}`}>Name is here</Link>
        </Typography> */}
          <div className="w-full max-w-6xl">
            <div className="sm:flex hidden gap-10 ">
              {linkData.map((item, index) => (
                <Link key={index} href={item.link}>
                  <Typography
                    variant="body"
                    className="hover:text-slate-200 hover:underline text-white"
                  >
                    {item.title}
                  </Typography>
                </Link>
              ))}
            </div>
            <div
              onClick={() => {
                setOpenMobileMenu(true);
              }}
              className="flex sm:hidden"
            >
              <Menu size={"20px"} className="text-white" />
            </div>
          </div>
        </div>
      </header>
      <MobileNavigation
        open={openMobileMenu}
        handleClose={() => {
          setOpenMobileMenu(false);
        }}
        data={linkData}
      />
    </>
  );
}
