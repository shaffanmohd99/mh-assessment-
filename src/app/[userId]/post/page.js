"use client";
import { useParams } from "next/navigation";

export default function PostPage() {
  const params = useParams();
  const id = params.userId;
  return <div>this is post page for {id} </div>;
}
