import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shaffan Mohd Assessment ",
  description: "Frontend Developer Assessment: Management System Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <ReactQueryProvider>
          <div>
            <header className="fixed top-0 left-0 right-0 bg-white h-16 border-b border-red-700 flex items-center justify-between px-[20px] sm:px-8 z-[99]">
              this is header
            </header>
          </div>
          <div className="flex items-center justify-center w-full">
            <div className="mt-[64px] w-full max-w-5xl min-h-[calc(100vh-64px)] p-4">
              {children}
            </div>
          </div>
        </ReactQueryProvider>
      </body>
    </html>
  );
}
