"use client";

import { cn } from "@/lib/utils";
import { ChevronsLeft, MenuIcon } from "lucide-react";
import { usePathname } from "next/navigation";
import { ElementRef, useRef, useState } from "react";
import { useMediaQuery } from "usehooks-ts";

export const Navigation = () => {
    const pathName = usePathname();
    const isMobile = useMediaQuery("max-width: 768px");

    const isResizingRef = useRef(false);
    const sidebarRef = useRef<ElementRef<"aside">>(null);
    const navbarRef = useRef<ElementRef<"div">>(null);
    const [isResetting, setIsResetting] = useState(false);
    const [isCollapsed, setIsCollapsed] = useState(isMobile);
    const handleMouseDown = (
        event: React.MouseEvent<HTMLDivElement, MouseEvent>
    ) => {
        event.preventDefault();
        event.stopPropagation();
        isResizingRef.current = true;
        document.addEventListener("mousemove" , handleMouseMove);
        document.addEventListener("mouseup" , handleMouseUp)

    }
    return(
        <>
         <aside
         ref= {sidebarRef} 
         className={cn("group/sidebar h-full bg-secondary overflow-y-auto relative flex flex-col z-[99999] w-60",
         isResetting &&"transition-all ease-in-out duration-300",
         isMobile && "w-0"
         )}>
            <div role="button" className={cn("h-6 w-6 text-muted-foreground rounded-sm hover:bg-neutral-300 absolute dark:hover:bg-neutral-600 transition top-3 right-2 opacity-0 group-hover/sidebar:opacity-100",
            isMobile && "opacity-100"
            )}>
                <ChevronsLeft className="h-6 w-6"/>
            </div>
           <div>
            <p>Action Items</p>
           </div>
           <div className="mt-4">
            <p>Documents</p>
           </div>
           <div
           onMouseDown={() => {}}
           onClick={() => {}}
           
           className="opacity-0 group-hover/sidebar:opacity-100 right-0 top-0 bg-primary/10 w-1 h-full absolute transition cursor-ew-resize "/>
        </aside>  
        <div  ref={navbarRef}
            className={cn(
                "absolute top-0 z-[99999] left-60 w-[calc(100%-240px)]",
                isResetting && "transition-all ease-in-out duration-300",
                isMobile && "left-0 w-full"
            )}>
                <nav className="bg-transparent px-3 py-2 w-full">
                    {isCollapsed} && <MenuIcon role="button" className="w-6 h-6 text-muted-foreground"/>
                </nav>
           
        </div>
        </>
       
    )
}