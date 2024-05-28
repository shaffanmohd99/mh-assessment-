"use client";
import { addTodo } from "@/api/todo";
import Typography from "@/components/Typography";
import { Button } from "@/components/ui/button";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";
import { useForm } from "react-hook-form";

export default function AddTodoListDialog({ handleClose, open }) {
  const queryClient = useQueryClient();
  const { mutate, isPending } = useMutation({
    mutationFn: (value) => addTodo(value),
    onSuccess: async (response) => {
      console.log("🚀 add successfull", response);
      await queryClient.invalidateQueries("getTodo");
      handleClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    mutate(data);
  };
  const onClose = () => {
    handleClose();
    reset({ title: "" });
  };
  return (
    <Dialog open={open}>
      <DialogContent
        className=" w-full py-8  overflow-y-auto max-h-[90%] overflow-x-hidden text-center"
        handleClose={handleClose}
      >
        <DialogHeader>
          <DialogTitle className="capitalize">
            <Typography variant="subtitle" className="font-bold text-left">
              Add new todo
            </Typography>
          </DialogTitle>
          <DialogDescription className="text-left py-2">
            <Input
              placeholder="Title"
              {...register("title", {
                required: "Title is required",
                minLength: {
                  value: 5,
                  message: "Title must be at least 5 characters long",
                },
              })}
            />
            <Typography variant="caption" className="text-red-500 py-2">
              {errors?.title?.message}
            </Typography>
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4 justify-center w-full ">
          <Button className="w-1/2" onClick={handleSubmit(onSubmit)}>
            {isPending ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Confirm"
            )}
          </Button>
          <Button onClick={onClose} variant="ghost" className="w-1/2">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
