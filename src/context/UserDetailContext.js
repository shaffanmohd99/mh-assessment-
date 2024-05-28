"use client";
import { getOneUser } from "@/api/user";
import { useQuery } from "@tanstack/react-query";
import { useParams } from "next/navigation";
import { createContext, useEffect, useState } from "react";

export const UserContext = createContext();

export default function UserDetailContext({ children }) {
  const [name, setName] = useState("");
  const params = useParams();
  const userId = params.userId;

  const { data, refetch } = useQuery({
    queryKey: ["getOneUser", userId],
    queryFn: () => getOneUser(userId),
    onSuccess: (res) => {
      console.log("🚀 ~ UserDetailContext ~ res:", res);
      setName(res.data.name);
    },
    onError: (err) => {
      setName("");
    },
  });
  const fetchUser = async () => {
    try {
      const response = await getOneUser(userId);
      if (response.status !== 200) {
        return console.log("error", response.status);
      }
      setName(response.data.name);
    } catch (error) {
      console.log("🚀 ~ fetchUser ~ error:", error);
    }
  };
  useEffect(() => {
    if (name === "") fetchUser();
  }, [name, userId]);
  return (
    <UserContext.Provider
      value={{
        name,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
