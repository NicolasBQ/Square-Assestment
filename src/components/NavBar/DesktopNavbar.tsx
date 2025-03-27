import { Square } from "./Square";
import { BussinessTypes } from "./BusinessTypes";
import { Options } from "./Options";
import { ShoppingCart } from "./ShoppingCart";

const DesktopNavbar = () => {
    return (
        <>
            <div className="flex items-center gap-4">
                <Square />
                <BussinessTypes />
            </div>
            <div className="flex items-center ">
                <Options />
                <ShoppingCart />
            </div>
        </>
    )
}

export {
    DesktopNavbar
}