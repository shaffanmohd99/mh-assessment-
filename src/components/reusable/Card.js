import { twMerge } from "tailwind-merge";

export default function Card({ children, className }) {
  return (
    <div
      className={twMerge("bg-slate-100  shadow-md rounded-lg p-4", className)}
    >
      {children}
    </div>
  );
}
