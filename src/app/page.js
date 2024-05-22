"use client";
import { getAllUser } from "@/api/user";
import Typography from "@/components/Typography";
import { useQuery } from "@tanstack/react-query";

export default function Home() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getAllUser"],
    queryFn: () => getAllUser(),
  });
  console.log("🚀 ~ Home ~ data:", data);
  return (
    <div>
      <Typography variant="title">User List</Typography>
    </div>
  );
}
