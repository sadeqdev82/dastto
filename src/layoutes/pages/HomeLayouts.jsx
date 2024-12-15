import Container from "../../components/shared/Container.jsx";
import Header from "../../components/shared/header/Header.jsx";
import Nav from "../../components/shared/header/Nav.jsx";
import MainNav from "../../components/main/Nav.jsx";
import NavItem from "../../components/shared/header/NavItem.jsx";
import MainNavItem from "../../components/main/NavItem.jsx";
import Main from "../../components/main/Main.jsx";
import Image from "../../components/shared/Image.jsx";
import {Link} from "react-router-dom";


export default function HomeLayouts() {

    return (
        <Container>
            {/*Menu*/}
            <Header className={'hidden lg:flex'}>
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
                    <Link to={"/"} className={"min-w-[135px] px-4 py-2 h-[45px] bg-[#443EFF] rounded-[505px] justify-center items-center gap-2.5 inline-flex text-white text-[18px] font-semibold"}>
                        بزن بریم حاجی
                    </Link>
                </div>
            </Header>
            {/*Main*/}
            <Main/>
            {/*Nav*/}
            <MainNav>
                <MainNavItem to={"/"}>خانه</MainNavItem>
                <MainNavItem to={"#"}>خلاقانه</MainNavItem>
                <MainNavItem to={"#"}>ارتباط</MainNavItem>
                <MainNavItem to={"#"}>اشتراک</MainNavItem>
            </MainNav>
            {/*Template*/}
            <Image src={'/images/Template.png'} alt={'template'} className={'mx-auto mt-14 mb-10 w-[402px]'}/>
        </Container>
    )
}
