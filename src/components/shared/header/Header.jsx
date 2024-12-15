import {Link} from "react-router-dom";
import Image from "../Image.jsx";
import Nav from "./Nav.jsx";
import NavItem from "./NavItem.jsx";

const Header = ({ className }) => {

    return (
        <header className={className + " " + "hidden lg:flex mt-[45px] items-center justify-between"}>
            <Link to={"/"} className={"grow"}>
                <Image src={"/images/logo2.png"} />
            </Link>
            <Nav>
                <NavItem to={"/"}>خانه</NavItem>
                <NavItem to={"#"}>خلاقانه</NavItem>
                <NavItem to={"#"}>ارتباط</NavItem>
                <NavItem to={"#"}>اشتراک</NavItem>
            </Nav>
            <div className="grow flex justify-end items-center">
                <Link to={"/login"} className={"min-w-[135px] px-4 py-2 h-[45px] bg-[#443EFF] rounded-[505px] justify-center items-center gap-2.5 inline-flex text-white text-[18px] font-semibold"}>
                    بزن بریم حاجی
                </Link>
            </div>
        </header>
    )
}

export default Header;