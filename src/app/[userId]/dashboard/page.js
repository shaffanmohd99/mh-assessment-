"use client";
import { useParams } from "next/navigation";
import BreadCrumb from "../component/BreadCrumb";
import { useQuery } from "@tanstack/react-query";
import { getAllPostFromOneUser, getPostComment } from "@/api/post";
import { useEffect, useState } from "react";
import GetAverageCommentPerPost from "./function";
import { CategoryScale } from "chart.js";
import { BarChart } from "@/components/reusable/BarChart";
import Chart from "chart.js/auto";
import Typography from "@/components/Typography";
import { Skeleton } from "@/components/ui/skeleton";
import EmptyState from "@/components/reusable/EmptyState";

Chart.register(CategoryScale);

export default function UserDashboard() {
  const params = useParams();
  const userId = params.userId;

  const { data, isLoading, isError } = useQuery({
    queryKey: ["GetAverageCommentPerPost", userId],
    queryFn: () => GetAverageCommentPerPost(userId),
  });
  const postData = data?.postData;
  const chartData = {
    labels: postData?.map((data) => data.postId),
    datasets: [
      {
        label: "Total number of comment",
        data: postData?.map((data) => data.comment),
        backgroundColor: [
          "rgba(75,192,192,1)",
          "#ecf0f1",
          "#50AF95",
          "#f3ba2f",
          "#2a71d0",
        ],
        borderColor: "black",
        borderWidth: 2,
      },
    ],
  };
  const options = {
    scales: {
      x: {
        title: {
          display: true,
          text: "Post ID",
          color: "black",
          font: {
            size: 16,
          },
        },
      },
      y: {
        title: {
          display: true,
          text: "Total Number of Comments",
          color: "black",
          font: {
            size: 16,
          },
        },
      },
    },
  };

  if (isLoading) {
    return (
      <div>
        <Skeleton className="w-full h-[500px]" />
      </div>
    );
  } else if (isError || postData.length < 1) {
    return (
      <div className="mt-[150px]">
        <EmptyState />
      </div>
    );
  } else {
    return (
      <div>
        <div>
          <BreadCrumb />
        </div>
        <Typography variant="title" className="mt-[20px]">
          Dashboard
        </Typography>
        <div className="flex gap-2 mt-[20px]">
          <Typography variant="body" className="font-bold">
            Average comment per post:{" "}
          </Typography>
          <Typography variant="body">
            {data?.average_comment_per_post}
          </Typography>
        </div>
        <BarChart chartData={chartData} options={options} />
      </div>
    );
  }
}
