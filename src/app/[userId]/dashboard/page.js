"use client";
import { useParams } from "next/navigation";

export default function UserDashboard() {
  const params = useParams();
  const userId = params.userId;
  return <div> this is page for {userId} </div>;
}
