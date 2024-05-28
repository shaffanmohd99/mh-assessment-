import { Inter } from "next/font/google";
import "./globals.css";
import { ReactQueryProvider } from "@/providers/ReactQueryProvider";
import ProgresssBarProvider from "@/providers/ProgresssBarProvider";
import UserDetailContext from "@/context/UserDetailContext";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Shaffan Mohd Assessment ",
  description: "Frontend Developer Assessment: Management System Dashboard",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ProgresssBarProvider>
        <body className={inter.className}>
          <ReactQueryProvider>
            <UserDetailContext>
              <div className="flex items-center justify-center w-full">
                <div className="mt-[64px] w-full max-w-6xl min-h-[calc(100vh-64px)] p-4">
                  {children}
                </div>
              </div>
            </UserDetailContext>
          </ReactQueryProvider>
        </body>
      </ProgresssBarProvider>
    </html>
  );
}
