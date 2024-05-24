"use client";
import { getOneUser } from "@/api/user";
import Typography from "@/components/Typography";
import Card from "@/components/reusable/Card";
import EmptyState from "@/components/reusable/EmptyState";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { IoChevronForward } from "react-icons/io5";

export default function UserPage() {
  const params = useParams();
  const id = params.userId;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getOneUser", id],
    queryFn: () => getOneUser(id),
  });
  const userData = data?.data;
  const personalDetail = [
    {
      title: "Full name",
      value: userData?.name,
    },
    {
      title: "Email",
      value: userData?.email,
    },
    {
      title: "Phone number",
      value: userData?.phone,
    },
    {
      title: "Website",
      value: userData?.website,
    },
    {
      title: "Address",
      value: `${userData?.address?.street}, ${userData?.address?.city}`,
    },
    {
      title: "Company",
      value: userData?.company?.name,
    },
  ];
  if (isLoading) {
    return (
      <div>
        <div className="flex gap-3 items-center">
          <Skeleton className="h-4 sm:w-[250px] w-[100px]" />
        </div>
        <div className="mt-[20px]">
          <Skeleton className="h-[400px] w-full sm:w-1/2" />
        </div>
      </div>
    );
  } else if (isError || !userData) {
    return (
      <div className="mt-[150px]">
        <EmptyState />
      </div>
    );
  } else {
    return (
      <div>
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
          <Typography variant="body">{userData?.username}</Typography>
        </div>
        <div className="mt-[20px]">
          <Card className="sm:w-1/2 w-full">
            <Typography variant="body" className=" font-bold">
              Personal details
            </Typography>
            {personalDetail?.map((item, index) => (
              <div className="flex flex-col gap-4">
                <div key={index} className="flex ">
                  <Typography variant="body" className=" w-[200px]">
                    {item.title}
                  </Typography>
                  <Typography variant="body" className="pr-2">
                    :
                  </Typography>
                  <Typography className="w-full " variant="body">
                    {item.value}
                  </Typography>
                </div>
              </div>
            ))}
          </Card>
        </div>
      </div>
    );
  }
}
