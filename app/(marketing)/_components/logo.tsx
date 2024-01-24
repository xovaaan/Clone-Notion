import Image from "next/image";
import { Poppins } from "next/font/google";
import { cn } from "@/lib/utils";

const font = Poppins({
    subsets: ["latin"],
    weight: ["400","600"],
});

export const Logo = () => {
    return(
        <div className="hidden items-center gap-x-2 md:flex">
            <Image 
            src="/writing.png"
            alt="logos"
            height="40"
            width="40"
            className="dark:hidden"
            />
           
            <p className={cn("font-semibold", font.className)}>
            Syntext
            </p>
        </div>
    )
}

