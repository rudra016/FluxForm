"use client"

import Image from "next/image";
import React from "react";
import logo from "../../public/file.png";
import { Button } from "@/components/ui/button";
import { SignInButton, UserButton, useUser } from "@clerk/nextjs";
import Link from "next/link";
import { usePathname } from "next/navigation";
const Header = () => {
  const { user, isSignedIn } = useUser();
  const path = usePathname();

  return !path.includes('aiform') && (
    <div className="p-5 border-b shadow-sm">
      <div className="flex items-center justify-between">
        
        <Image src={logo} alt="logo" width={50} height={20} />
        {isSignedIn ? (
          <div className="flex items-center gap-5">
            <Link href={'/dashboard'}>
            <Button variant="outline">Dashboard</Button>
            </Link>
            
            <UserButton />
          </div>
        ) : (
            <SignInButton>
                <Button>Get Started</Button>
            </SignInButton>
          
        )}
      </div>
       <div className="fixed inset-x-0 bottom-0 p-4">
    <div className="rounded-lg bg-primary px-4 py-3 text-white shadow-lg">
      <p className="text-center text-sm font-medium">
        Made with 💖 by <span><a href="https://github.com/rudra016" className="inline-block underline"> Rudra </a></span> 
        
      </p>
    </div>
  </div>
    </div>
  );
};

export default Header;
