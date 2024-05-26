"use client";
import { getPostComment } from "@/api/post";
import Typography from "@/components/Typography";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Skeleton } from "@/components/ui/skeleton";
import { useQuery } from "@tanstack/react-query";

export default function PostDetailDialog({
  open,
  title,
  id,
  body,
  handleClose,
}) {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getPostComment", id],
    queryFn: () => getPostComment(id),
  });
  const commentListData = data?.data;

  return (
    <Dialog open={open}>
      <DialogContent
        className="w-full py-8  overflow-y-auto max-h-[90%] overflow-x-hidden"
        handleClose={handleClose}
      >
        {isLoading ? (
          <>
            <DialogHeader>
              <DialogTitle className="capitalize">
                <Skeleton className="w-[150px] h-4" />
              </DialogTitle>
              <DialogDescription>
                <Skeleton className="w-full h-20" />
              </DialogDescription>
            </DialogHeader>
            <div>
              <Skeleton className="w-[150px] h-4 my-4" />
              <div className="flex flex-col gap-4">
                {Array.from({ length: 3 }).map((_, index) => (
                  <div key={index}>
                    <div className="flex sm:gap-2 gap-1 font-semibold capitalize flex-col sm:flex-row">
                      <Skeleton className="w-[50px] h-4" />
                      <Skeleton className="w-[50px] h-4" />
                    </div>
                    <Skeleton className="w-full h-16 mt-2" />
                  </div>
                ))}
              </div>
            </div>
          </>
        ) : isError || commentListData?.length < 1 ? (
          <Typography variant="body">
            An error has occured.Please try again later
          </Typography>
        ) : (
          <>
            <DialogHeader>
              <DialogTitle className="capitalize">
                <Typography variant="subtitle" className="font-bold text-left">
                  {title}
                </Typography>
              </DialogTitle>
              <DialogDescription className="text-left">
                {body}
              </DialogDescription>
            </DialogHeader>
            <div>
              <Typography variant="body" className="font-semibold">
                Comment
              </Typography>
              <div className="flex flex-col gap-4">
                {commentListData?.map((item, index) => (
                  <div key={index}>
                    {/* <Typography variant="p">{index + 1}</Typography> */}

                    <div className="flex sm:gap-2 gap-0 font-semibold capitalize flex-col sm:flex-row">
                      <Typography variant="p">{item.name}</Typography>
                      <Typography variant="p" className="hidden sm:flex">
                        |
                      </Typography>
                      <Typography variant="p">{item.email}</Typography>
                    </div>
                    <Typography variant="p">{item.body}</Typography>
                  </div>
                ))}
              </div>
            </div>
          </>
        )}
      </DialogContent>
    </Dialog>
  );
}
