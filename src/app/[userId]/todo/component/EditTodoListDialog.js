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
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { Loader2 } from "lucide-react";

export default function EditTodoListDialog({ handleClose, open, type }) {
  const todoId = type?.id;
  const mutateData = { completed: type?.value };

  const queryClient = useQueryClient();
  const { mutate: editMutate, isLoading: editLoading } = useMutation({
    mutationFn: (value) => editTodo(todoId, value),
    onSuccess: async (response) => {
      console.log("🚀 edit successfull", response);
      await queryClient.invalidateQueries("getTodo");
      handleClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  const { mutate: deleteMutate, isLoading: deleteLoading } = useMutation({
    mutationFn: () => deleteTodo(todoId),
    onSuccess: async (response) => {
      console.log("🚀delete successful", response);
      await queryClient.invalidateQueries("getTodo");
      handleClose();
    },
    onError: (error) => {
      console.log(error);
    },
  });

  return (
    <Dialog open={open}>
      <DialogContent
        className="sm:w-[20%] w-full py-8  overflow-y-auto max-h-[90%] overflow-x-hidden text-center"
        handleClose={handleClose}
      >
        <DialogHeader>
          <DialogTitle className="capitalize">
            <Typography variant="subtitle" className="font-bold text-left">
              {type?.type === "edit" ? "Edit todo list" : "Delete todo list"}
            </Typography>
          </DialogTitle>
          <DialogDescription className="text-left">
            Are you sure you want to change this
          </DialogDescription>
        </DialogHeader>
        <div className="flex gap-4 justify-center w-full ">
          <Button
            className="w-1/2"
            onClick={
              type?.type === "edit"
                ? () => editMutate(mutateData)
                : deleteMutate
            }
          >
            {editLoading || deleteLoading ? (
              <Loader2 className="mr-2 h-4 w-4 animate-spin" />
            ) : (
              "Confirm"
            )}
          </Button>
          <Button onClick={handleClose} variant="ghost" className="w-1/2">
            Cancel
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
