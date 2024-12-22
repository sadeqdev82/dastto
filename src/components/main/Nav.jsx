import {Link} from "react-router-dom";
import Image from "../shared/Image.jsx";
import NavItem from "./NavItem.jsx";

const Nav = () => {

    return (<>
        <nav
            className={"grow flex items-center justify-center mt-[120px] sticky top-[37px] right-1/2 transform -translate-x-1"}>
            <ul className={"border-0 p-0 m-0 flex items-center flex-row-reverse rounded-[100px] px-6 py-3.5 bg-[#F5F8FD] justify-center gap-[26px]"}>
                <li>
                    <Link to="/">
                        <Image src={'/images/dasto_black.png'} alt={'dastto black'}/>
                    </Link>
                </li>
                <NavItem to={"/"}>خانه</NavItem>
                <NavItem to={"#"}>خلاقانه</NavItem>
                <NavItem to={"#"}>ارتباط</NavItem>
                <NavItem to={"#"}>اشتراک</NavItem>
            </ul>
        </nav>
    </>)
}

export default Nav;