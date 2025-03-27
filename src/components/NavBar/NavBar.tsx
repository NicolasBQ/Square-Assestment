import { MobileNavbar } from "./MobileNavbar";
import { DesktopNavbar } from "./DesktopNavbar";

const NavBar = () => {
    return (
        <header className="px-[5px] py-[14px] border-b-2 border-grey shadow-sm lg:px-4 lg:py-1 lg:shadow-none">
            <div className="flex justify-between items-center lg:hidden">
                <MobileNavbar />
            </div>

            <div className="hidden lg:flex justify-between items-center">
                <DesktopNavbar />
            </div>
        </header>
    )
}

export {
    NavBar
}