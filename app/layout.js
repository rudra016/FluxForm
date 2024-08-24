import { Inter } from "next/font/google";
import "./globals.css";
import Header from "./_components/Header";
import { ClerkProvider } from "@clerk/nextjs";
import { Toaster } from "@/components/ui/sonner";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "FluxForm AI",
  description: "Your go to AI Form Builder, Generate forms in seconds.",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>    
      <html lang="en">
      <body className={inter.className}>
        <Header />
       <Toaster />
        {children}</body>
    </html>
    </ClerkProvider>

  );
}
