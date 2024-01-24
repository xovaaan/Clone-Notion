"use client"

import { useScrollTop } from "@/hooks/use-scroll-top"
import { cn } from "@/lib/utils";
import { Logo } from "./logo";
import { ModeToggle } from "./mode-toggle";
import { useConvexAuth } from "convex/react";
import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Button } from "@/components/ui/button";
import { Spinner } from "./spinner";
import Link from "next/link";

export const Navbar = () => {
    const {isAuthenticated, isLoading} = useConvexAuth()
    const scrolled = useScrollTop();
    return(
        <div className={cn(
            "flex items-center dark:bg-[#0F1035] top-0 fixed bg-background z-50 w-full p-6",
            scrolled && "border-b shadow-sm"
        )}> 
           <Logo/>
           <div className="md:ml-auto w-full justify-between flex items-center gap-x-2 md:justify-end ">
            {isLoading && (
               <Spinner/>
            )}
            {!isAuthenticated && !isLoading && (
                <>
                <SignInButton mode="modal">
                    <Button variant="ghost" size="sm">
                        Login
                    </Button>
                </SignInButton>
                <SignInButton mode="modal">
                    <Button size="sm">
                        Get For Free
                    </Button>
                </SignInButton>
                </>
            )}
            {isAuthenticated && !isLoading && (
                <>
                <Button  size="sm" asChild>
                    <Link href="/documents">
                        Enter Syntext
                    </Link>
                    </Button>
                    <UserButton
                    afterSignOutUrl="/"
                    />

                
                </>
            )}
            <ModeToggle/>

           </div>
        </div>
    )
}