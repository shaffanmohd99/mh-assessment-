"use client";
import { getAllPostFromOneUser } from "@/api/post";
import Typography from "@/components/Typography";
import { DataTable } from "@/components/reusable/DataTable";
import { useQuery } from "@tanstack/react-query";
import Link from "next/link";
import { useParams } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import { IoChevronForward } from "react-icons/io5";
import PostDetailDialog from "./component/PostDetailDialog";
import { useState } from "react";

export default function PostPage() {
  const params = useParams();
  const userId = params.userId;
  const [postDetail, setPostDetail] = useState();
  const [openDialog, setOpenDialog] = useState(false);

  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllPostFromOneUser", userId],
    queryFn: () => getAllPostFromOneUser(userId),
  });
  const postListData = data?.data;
  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "title",
      header: "Title",
    },

    {
      accessorKey: "id",
      header: null,

      cell: ({ row }) => {
        return (
          <div
            className="flex justify-end cursor-pointer text-slate-600 hover:text-slate-900"
            onClick={() => {
              setOpenDialog(true);
              setPostDetail(row.original);
            }}
          >
            {/* <PostDetailDialog
              title={row?.original?.title}
              body={row?.original?.body}
              id={row?.original?.id}
            /> */}
            <FaChevronRight size={"20px"} />
          </div>
        );
      },
    },
  ];
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
        <Typography variant="body">name create context post list</Typography>
      </div>
      <Typography variant="title" className="mt-[20px]">
        Post List
      </Typography>
      <div className="mt-[50px]">
        <DataTable
          columns={columns}
          data={postListData}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
      <PostDetailDialog
        title={postDetail?.title}
        body={postDetail?.body}
        id={postDetail?.id}
        open={openDialog}
        handleClose={() => setOpenDialog(false)}
      />
    </div>
  );
}
