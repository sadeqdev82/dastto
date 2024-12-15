import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const NavItem = ({className, children, to, nav = 1}) => {
    const [active, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === to) {
            setActive(true)
        } else {
            setActive(false)
        }
    }, [location])

    return (<>
            <li className={className + " " + (active ? "!text-[#000000B2] relative before:inline-block before:absolute before:bottom-[-15px] before:right-1/2 before:transform before:translate-x-1/2 before:w-[20px] before:h-[4px] before:bg-[#443EFF] before:rounded-full" : "") + ' ' + 'text-[17px] font-semibold text-[#96979E99]'}>
                <Link to={to}>{children}</Link>
            </li>

        </>)
}

export default NavItem;