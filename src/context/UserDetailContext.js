"use client";
import { createContext, useState } from "react";

export const UserContext = createContext();
export default function UserDetailContext({ children }) {
  const [name, setName] = useState();
  return (
    <UserContext.Provider
      value={{
        name,
        setName,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
