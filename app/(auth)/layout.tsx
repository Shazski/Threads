import { ClerkProvider } from "@clerk/nextjs";
import { Inter } from "next/font/google";
import { ReactNode } from "react";
import '../globals.css'

export const metadata = {
  title: "Threads",
  description: "A Nextjs meta threads application"
};

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }: { children: ReactNode }) {

  return (
    <ClerkProvider>
      <html lang="en">
        <body className={`${inter.className} bg-dark-1`}>
          {children}
        </body>
      </html>
     </ClerkProvider>
  );
}