"use client";
import { useParams } from "next/navigation";
import BreadCrumb from "../component/BreadCrumb";
import Typography from "@/components/Typography";
import { getTodo } from "@/api/todo";
import { useQuery } from "@tanstack/react-query";
import { DataTable } from "@/components/reusable/DataTable";
import { useState } from "react";
import EditTodoListDialog from "./component/EditTodoListDialog";
import { Trash2Icon } from "lucide-react";
import { FaTrash } from "react-icons/fa";
import { Button } from "@/components/ui/button";
import AddTodoListDialog from "./component/AddTodoListDialog";

export default function Todo() {
  const params = useParams();
  const userId = params.userId;
  const [openEditDialog, setOpenEditDialog] = useState(false);
  const [openAddDialog, setOpenAddDialog] = useState(false);
  const [type, setType] = useState();
  const { data, isLoading, isError } = useQuery({
    queryKey: ["getTodo", userId],
    queryFn: () => getTodo(userId),
  });
  const handleChange = (value, id, type) => {
    setOpenEditDialog(true);
    setType({ id, type, value });
  };
  const todoListData = data?.data;
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
      accessorKey: "completed",
      header: "Done",

      cell: ({ row }) => {
        return (
          <div className="flex justify-start gap-4 cursor-pointer text-slate-600 hover:text-slate-900">
            <input
              onChange={(e) =>
                handleChange(e.target.checked, row.original.id, "edit")
              }
              type="checkbox"
              defaultChecked={row.original.completed}
            />
            <FaTrash
              size={"20px"}
              className="text-red-500 hover:text-red-700"
              onClick={() => handleChange("", row.original.id, "delete")}
            />
          </div>
        );
      },
    },
  ];
  return (
    <div>
      <div>
        <BreadCrumb />
      </div>
      <Typography variant="title" className="mt-[20px]">
        Todo List
      </Typography>
      <div className="mt-[50px]">
        <div className="w-full flex justify-end py-4">
          <Button
            onClick={() => setOpenAddDialog(true)}
            className=" bg-slate-600"
          >
            Add todo
          </Button>
        </div>
        <DataTable
          columns={columns}
          data={todoListData}
          isError={isError}
          isLoading={isLoading}
        />
      </div>
      <AddTodoListDialog
        open={openAddDialog}
        handleClose={() => {
          setOpenAddDialog(false);
        }}
        type={type}
      />
      <EditTodoListDialog
        open={openEditDialog}
        handleClose={() => {
          setOpenEditDialog(false);
          setType("");
        }}
        type={type}
      />
    </div>
  );
}
