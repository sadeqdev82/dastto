import {Link, useLocation} from "react-router-dom";
import {useEffect, useState} from "react";

const NavItem = ({ className, children, to, nav = 1  }) => {
    const [active, setActive] = useState(false);
    const location = useLocation();

    useEffect(() => {
        if (location.pathname === to) {
            setActive(true)
        }else {
            setActive(false)
        }
    }, [location])

    const handle = () => {
        if (nav === 1) {
            return <>
                <li className={className + " " + (active ? "!text-[#000000B2] relative before:inline-block before:absolute before:bottom-[-5px] before:right-1/2 before:transform before:translate-x-1/2 before:w-[15px] before:h-[4px] before:bg-black before:rounded-full" : "") + ' ' + 'text-[18px] font-semibold text-[#96979E99]'}>
                    <Link to={to}>{children}</Link>
                </li>
            </>
        }else if (nav === 2) {
            return <>
                <li className={className + " " + (active ? "!text-[#000000B2] relative before:inline-block before:absolute before:bottom-[-14px] before:right-1/2 before:transform before:translate-x-1/2 before:w-[30px] before:h-[3px] before:bg-[#4c73ff] before:rounded-full" : "") + ' ' + 'text-[18px] font-semibold text-[#96979E99]'}>
                    <Link to={to}>{children}</Link>
                </li>
            </>
        }
    }

    return (
        <>
            { handle() }
        </>
    )
}

export default NavItem;