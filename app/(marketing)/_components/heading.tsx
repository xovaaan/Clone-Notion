"use client";
import { Button } from "@/components/ui/button";
import { useConvexAuth } from "convex/react";
import { ArrowRight } from "lucide-react";
import { Spinner } from "./spinner";
import Link from "next/link";
import { SignInButton } from "@clerk/clerk-react";

export const Heading = () => {
  const {isAuthenticated, isLoading} = useConvexAuth();
    return ( 
        <div className="max-w-3xl  space-y-4 mt-10">
         <h1 className="text-3xl md:text-6xl sm:text-5xl font-bold ">
        Ideas, Documents, Plans  
        Welcome to <span className="text-blue-600 ">Syntext!</span>
         </h1>
         <h3 className="text-base sm:text-xl md:text-2xl font-medium">
            A platform where you can share your ideas & <br /> documents with the world.
         </h3>
         {isLoading && (
          <div className="w-full items-center justify-center flex">
            <Spinner size="lg"/>
          </div> 
         )}
         {isAuthenticated && !isLoading && (
          <Button asChild>
            <Link href="/documents">
            Enter Syntext
          <ArrowRight className="w-4 h-4 ml-2"/>
            </Link> 
        </Button>
         )}
         {!isAuthenticated && !isLoading && (
          <SignInButton mode="modal">
            <Button>
              Get Syntext Free
              <ArrowRight className="w-4 h-4 ml-2"/>
            </Button>
          </SignInButton>
         )}
        </div>
     )
}
