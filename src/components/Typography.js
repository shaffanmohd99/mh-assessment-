import { twMerge } from "tailwind-merge";

export default function Typography({ children, variant = "p", className }) {
  if (variant === "title") {
    return (
      <h1
        className={twMerge(
          "text-4xl font-extrabold tracking-tight lg:text-5xl",
          className
        )}
      >
        {children}
      </h1>
    );
  }
  if (variant === "subtitle") {
    return (
      <h2
        className={twMerge(
          "lg:text-2xl text-xl font-semibold tracking-tight",
          className
        )}
      >
        {children}
      </h2>
    );
  }
  if (variant === "body") {
    return (
      <h3 className={twMerge("lg:text-lg  text-md tracking-tight", className)}>
        {children}
      </h3>
    );
  }
  if (variant === "p") {
    return (
      <p className={twMerge("lg:text-md text-sm ", className)}>{children}</p>
    );
  }
  if (variant === "caption") {
    return (
      <p className={twMerge("lg:text-sm text-xs", className)}>{children}</p>
    );
  }
}
