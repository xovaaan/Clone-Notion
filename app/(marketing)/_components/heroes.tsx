import Image from "next/image";

export const Heroes = () => {
    return(
        <div className="flex flex-col items-center justify-center max-w-5xl">
            <div className="flex items-center">
                <div className="relative w-[300px] h-[300px] sm:w-[350px] sm:h-[350px] md:h-[400px] md:w-[400px]">
            <Image src="/documents.png"
            fill
            className="object-contain dark:hidden"
            alt="documents"
            />
            <Image src="/documents-dark.png"
            fill
            className="object-contain hidden dark:block"
            alt="documents"
            />
                </div>
                <div className="relative hidden md:block h-[400px] w-[400px]">
            <Image src="/reading.png"
             className="object-contain dark:hidden"
            fill
            alt="reading"
            />
            <Image src="/reading-dark.png"
             className="object-contain hidden dark:block"
            fill
            alt="reading"
            />
                </div>
            </div>
        </div>
    )
}