
import { ModeToggle } from "./toggle-theme"
import Link from "next/link"
import UserBox from "./user-box"


const Navbar = () =>
{
    return (
        <div
            className="  fixed w-full px-[10vw] z-[999] bg-background opacity-90  max-sm:px-4 flex justify-between items-center py-4  border-1 border-b-black"
        >
            <Link href={'/'}>
                <h1 className=" text-2xl  font-bold">MoviesFlix</h1>
            </Link>
            <div className=" flex items-center gap-x-4">
                <ModeToggle />
                <UserBox />
            </div>
        </div>
    )
}

export default Navbar