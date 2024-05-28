"use client";
import { deleteTodo, editTodo } from "@/api/todo";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import Link from "next/link";

export default function MobileNavigation({ handleClose, open, data }) {
  return (
    <Dialog open={open}>
      <DialogContent
        className=" w-full py-20  overflow-y-auto h-full overflow-x-hidden text-center"
        handleClose={handleClose}
      >
        <DialogHeader>
          {/* <DialogTitle className="capitalize">
            <Typography variant="subtitle" className="font-bold text-left">
            </Typography>
          </DialogTitle> */}
          <DialogDescription className="text-left flex flex-col gap-4">
            {data.map((item, index) => (
              <Link key={index} href={item.link} onClick={handleClose}>
                <Typography
                  variant="p"
                  className="text-slate-600 hover:text-slate-400 hover:underline"
                >
                  {item.title}
                </Typography>
              </Link>
            ))}
          </DialogDescription>
        </DialogHeader>
        {/* <div className="flex gap-4 justify-center w-full ">
          <Button className="w-1/2">Confirm</Button>
          <Button onClick={handleClose} variant="ghost" className="w-1/2">
            Cancel
          </Button>
        </div> */}
      </DialogContent>
    </Dialog>
  );
}
