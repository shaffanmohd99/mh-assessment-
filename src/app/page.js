"use client";
import { getAllUser } from "@/api/user";
import Typography from "@/components/Typography";
import { DataTable } from "@/components/reusable/DataTable";
import { useQuery } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { FaChevronRight } from "react-icons/fa";
import Link from "next/link";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllUser"],
    queryFn: () => getAllUser(),
  });
  const userData = data?.data;

  const columns = [
    {
      accessorKey: "id",
      header: "ID",
    },
    {
      accessorKey: "name",
      header: "Name",
    },
    {
      accessorKey: "email",
      header: "Email",
    },
    {
      accessorKey: "email",
      header: null,

      cell: ({ row }) => {
        return (
          <Link
            href={`/${row.original.id}`}
            className="flex justify-end cursor-pointer text-slate-600 hover:text-slate-900"
          >
            <FaChevronRight size={"20px"} />
          </Link>
        );
      },
    },
  ];

  return (
    <div>
      <Typography variant="title">User List</Typography>
      <div className="mt-[50px]">
        <DataTable
          columns={columns}
          data={userData}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
    </div>
  );
}
